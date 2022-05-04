import React, { useEffect, useState } from "react";
import axios from "api/personsAxios";
import Modal from "components/AppModal/AppModal";
import DraggableList from "./DraggableList";
import styles from "./list.module.scss";

const List = () => {
  const [list, setList] = useState(undefined);
  const [personSelected, setPersonSelected] = useState(undefined);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  //Actions
  const handleSelectedPerson = (person) => {
    setPersonSelected(person);
    setModal(true);
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
          <DraggableList
            key={list}
            list={list}
            setList={(newOrderedList) => setList(newOrderedList)}
            onPersonSelect={handleSelectedPerson}
          />
        </div>
      </div>
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        type="person"
        person={personSelected}
      />
    </>
  );
};

export default List;
