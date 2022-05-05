import React, { useEffect, useState } from "react";
import axios from "api/personsAxios";
import AppButton from "components/AppButton/AppButton";
import Modal from "components/AppModal/AppModal";
import DraggableList from "./DraggableList";
import styles from "./list.module.scss";

const List = () => {
  const [list, setList] = useState(undefined);
  const [personSelected, setPersonSelected] = useState(undefined);
  const [modalPerson, setModalPerson] = useState(false);
  const [modalAddPerson, setModalAddPerson] = useState(false);
  const [loading, setLoading] = useState(false);

  //Actions
  const handleSelectedPerson = (person) => {
    setPersonSelected(person);
    setModalPerson(true);
  };

  //Http
  const getListOfPeople = async () => {
    setLoading(true);
    await axios
      .get(`/persons`)
      .then((res) => {
        const { data } = res;
        return setList(data.data);
      })
      .catch((err) => {
        /* Notification(
          "Something went wrong... Please check your internet connection and try again.",
          "error"
        ); */
        return setLoading(false);
      });
  };
  const postNewPerson = async (newPerson) => {
    return await axios
      .post(`/persons`, newPerson)
      .then((res) => {
        const { data } = res;

        return console.log(data);
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  const deletePerson = async (id) => {
    return await axios
      .delete(`/persons/${id}`)
      .then((res) => {
        const { data } = res;
        return console.log(data);
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  //Form
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let form = e.target.elements;
    const newPerson = {
      name: `${form.firstName.value} ${form.lastName.value}`,
      email: [{ value: form.email.value, primary: true, label: "work" }],
      phone: [{ value: form.phone.value, primary: true, label: "work" }]
      /* org_name: form.organization.value */
    };
    return postNewPerson(newPerson);
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
        </div>
      </div>
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
