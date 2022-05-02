import React from "react";
import styles from "./list.module.scss";
import ListRow from "./ListRow";

const List = () => {
  return (
    <div className={styles.list}>
      <h1>{"People's"} List</h1>
      <hr />
      <div className="mx-3">
        <ListRow />
      </div>
    </div>
  );
};

export default List;
