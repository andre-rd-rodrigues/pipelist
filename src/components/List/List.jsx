import React, { useEffect, useState } from "react";
import AppModal from "components/AppModal/AppModal";
import styles from "./list.module.scss";
import ListRow from "./ListRow";
import axios from "api/personsAxios";

const List = () => {
  const [list, setList] = useState(undefined);
  const [personSelected, setPersonSelected] = useState(undefined);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  //Actions
  const handleClickPerson = (person) => {
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
        return setList(data);
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
          <ListRow onPersonSelect={handleClickPerson} />
        </div>
      </div>
      <AppModal
        show={modal}
        onHide={() => setModal(false)}
        type="person"
        person={personSelected}
      />
    </>
  );
};

export default List;
