import React from "react";
import OfficeIcon from "assets/icons/office_icon";
import { Image } from "react-bootstrap";
import styles from "./list.module.scss";

const ListRow = () => {
  return (
    <div className={styles.listRow}>
      <div>
        <h4>Micheal Barton</h4>
        <div className="list_row_person_address_div">
          <OfficeIcon />
          <p>PerkinElmer Inc</p>
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        roundedCircle
      />
    </div>
  );
};

export default ListRow;
