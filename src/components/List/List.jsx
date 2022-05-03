import React, { useEffect, useState } from "react";
import AppModal from "components/AppModal/AppModal";
import styles from "./list.module.scss";
import ListRow from "./ListRow";

const List = () => {
  const [personSelected, setPersonSelected] = useState(undefined);
  const [modal, setModal] = useState(false);

  const handleClickPerson = (person) => {
    setPersonSelected(person);
    setModal(true);
  };

  return (
    <>
      <div className={styles.list}>
        <h1>{"People's"} List</h1>
        <hr />
        <div className="mx-3">
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
