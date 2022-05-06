import React, { useEffect, useState } from "react";
import axios from "api/pipelistAxios";
import AppButton from "components/AppButton/AppButton";
import Modal from "components/AppModal/AppModal";
import AppToast from "components/AppToast";
import ErrorPage from "components/ErrorPage/ErrorPage";
import Loading from "components/Loading/Loading";
import { data_fields } from "utils/configs";
import DraggableList from "./DraggableList";
import styles from "./list.module.scss";

const List = () => {
  const [list, setList] = useState(undefined);
  const [personSelected, setPersonSelected] = useState(undefined);
  const [modalPerson, setModalPerson] = useState(false);
  const [modalAddPerson, setModalAddPerson] = useState(false);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  //Actions
  const handleSelectedPerson = (person) => {
    setPersonSelected(person);
    setModalPerson(true);
  };
  const notificationReload = (message, type) => {
    AppToast(message, type);
    return setTimeout(() => {
      window.location.reload();
    }, 1800);
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
      .then((res) => {
        const { data } = res;
        setModalAddPerson(false);
        return notificationReload("Added person succefully!", "success");
      })
      .catch(() => {
        AppToast("Operation canceled. Please try again later.", "error");
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
        return AppToast("Operation canceled. Please try again later.", "error");
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

    const { assistant, location, groups } = data_fields;

    const newPerson = {
      name: `${form.firstName.value} ${form.lastName.value}`,
      email: [{ value: form.email.value, primary: true, label: "work" }],
      phone: [{ value: form.phone.value, primary: true, label: "work" }],
      [assistant]: form.assistant.value,
      [groups]: form.groups.value
    };

    return handlePostNewPerson(form.organization.value, newPerson);
  };
  //Lifecycle
  useEffect(() => {
    getListOfPeople();
  }, []);
  return (
    <>
      <div className={styles.list}>
        <h1>{"People's"} List</h1>
        <hr />
        <div id="list_section">
          {!networkError ? (
            <>
              <div className="list_add_person">
                <AppButton
                  onClick={() => setModalAddPerson(true)}
                  label="Add Person"
                  color="green"
                />
              </div>
              <DraggableList
                key={list}
                list={list}
                setList={(newOrderedList) => setList(newOrderedList)}
                onPersonSelect={handleSelectedPerson}
              />
            </>
          ) : (
            <ErrorPage />
          )}
        </div>
      </div>
      {loading && <Loading loading={loading} />}
      <Modal
        show={modalPerson}
        onHide={() => setModalPerson(false)}
        onOpenModal={() => setModalPerson(true)}
        type="person"
        person={personSelected}
        onDeletePerson={deletePerson}
      />
      <Modal
        show={modalAddPerson}
        onHide={() => setModalAddPerson(false)}
        type="add_person"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default List;
