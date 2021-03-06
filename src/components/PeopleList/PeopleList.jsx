import React, { useContext, useEffect, useState } from "react";
import axios from "api/pipelistAxios";
import Button from "components/AppButton/AppButton";
import AddPersonModal from "components/AppModals/AddPersonModal";
import PersonModal from "components/AppModals/PersonModal";
import ErrorPage from "components/ErrorPage/ErrorPage";
import Notification from "components/Notification/Notification";
import { LoadingContext } from "context/loading-context";
import { motion } from "framer-motion";
import {
  horizontalEntranceLeft,
  horizontalEntranceRight
} from "styles/motion/motionVariants";
import { data_fields } from "utils/configs";
import { notificationReload } from "utils/global-utils";
import DraggableList from "./DraggableList";
import EmptyList from "./EmptyList";
import styles from "./list.module.scss";

const PeopleList = () => {
  const [list, setList] = useState(undefined);
  const [personSelected, setPersonSelected] = useState(undefined);
  const [modalPerson, setModalPerson] = useState(false);
  const [modalAddPerson, setModalAddPerson] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const { setLoading } = useContext(LoadingContext);

  //Actions
  const handleSelectedPerson = (person) => {
    setPersonSelected(person);
    setModalPerson(true);
  };

  //Http
  const getListOfPeople = async () => {
    setLoading(true);
    await axios
      .get(`/persons?limit=200`)
      .then((res) => {
        const { data } = res;
        setLoading(false);
        return setList(data.data);
      })
      .catch(() => {
        setNetworkError(true);
        return setLoading(false);
      });
  };

  const postNewPerson = async (newPerson) => {
    setLoading(true);
    return axios
      .post(`/persons`, newPerson)
      .then(() => {
        setModalAddPerson(false);
        return notificationReload("Added person succefully!", "success");
      })
      .catch(() => {
        Notification("Operation canceled. Please try again later.", "error");
        return setLoading(false);
      });
  };

  const deletePerson = async (id) => {
    setLoading(true);
    return await axios
      .delete(`/persons/${id}`)
      .then(() => {
        return notificationReload("Person deleted successfully!", "success");
      })
      .catch(() => {
        return Notification(
          "Operation canceled. Please try again later.",
          "error"
        );
      });
  };

  const handlePostNewPerson = async (organizationName, newPerson) => {
    //Get organization org_id by input name
    await axios
      .get(`/organizations/search?term=${organizationName}`)
      .then((res) => {
        const { data } = res.data;
        if (data.items.length > 0)
          return postNewPerson({ ...newPerson, org_id: data.items[0].item.id });
        return postNewPerson(newPerson);
      })
      .catch(() => {
        return postNewPerson(newPerson);
      });
  };

  //Form
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let form = e.target.elements;

    const { assistant, groups } = data_fields;

    const newPerson = {
      name: `${form.firstName.value} ${form.lastName.value}`,
      email: [{ value: form.email.value, primary: true, label: "work" }],
      phone: [{ value: form.phone.value, primary: true, label: "work" }],
      [assistant]: form.assistant.value,
      [groups]: form.groups.value
    };

    return handlePostNewPerson(form.organization.value, newPerson);
  };

  const ListConditionals = () => {
    if (networkError) {
      return <ErrorPage />;
    } else if (list?.length === 0) {
      return <EmptyList />;
    } else {
      return (
        <DraggableList
          key={list}
          list={list}
          setList={(newOrderedList) => setList(newOrderedList)}
          onPersonSelect={handleSelectedPerson}
        />
      );
    }
  };

  //Lifecycle
  useEffect(() => {
    getListOfPeople();
  }, []);
  return (
    <>
      <div className={styles.list}>
        <motion.h1
          variants={horizontalEntranceLeft}
          initial="hidden"
          animate="visible"
        >
          {"People's"} List
        </motion.h1>
        <hr />
        <div id="list_section">
          <motion.div
            variants={horizontalEntranceRight}
            initial="hidden"
            animate="visible"
            className="list_add_person"
          >
            <Button
              onClick={() => setModalAddPerson(true)}
              label="Add Person"
              color="green"
              data-testid="add_person_button"
            />
          </motion.div>
          {ListConditionals()}
        </div>
      </div>
      <PersonModal
        show={modalPerson}
        onHide={() => setModalPerson(false)}
        openModal={() => setModalPerson(true)}
        type="person"
        person={personSelected}
        deletePerson={deletePerson}
      />
      <AddPersonModal
        show={modalAddPerson}
        onHide={() => setModalAddPerson(false)}
        type="add_person"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default PeopleList;
