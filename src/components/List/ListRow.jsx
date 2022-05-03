import React from "react";
import OfficeIcon from "assets/icons/office_icon";
import { Image } from "react-bootstrap";
import styles from "./list.module.scss";
import Avatar from "components/Avatar/Avatar";

const ListRow = ({ onPersonSelect }) => {
  const person = {
    name: "Ana Rita Sousa",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    phone: { value: "+351 91 539 65" },
    cc_email: "anaritasousa@company.com",
    org_name: "Johson & Johnson",
    Assistant: "Jessica Mourao",
    Groups: "Women in Tech",
    Location: "Porto, Portugal"
  };

  const onRowClicked = () => {
    onPersonSelect(person);
  };
  return (
    <div
      className={styles.listRow}
      role="button"
      onClick={onRowClicked}
      onKeyPress={onRowClicked}
      tabIndex={0}
    >
      <div>
        <h4>Micheal Barton</h4>
        <div className="list_row_person_address_div">
          <OfficeIcon />
          <p>PerkinElmer Inc</p>
        </div>
      </div>
      <Avatar src={person.imageSrc} alt="Pipelist avatar" />
    </div>
  );
};

export default ListRow;
