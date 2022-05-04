import React from "react";
import OfficeIcon from "assets/icons/office_icon";
import Avatar from "components/Avatar/Avatar";
import { personPictureRender } from "utils/globalUtils";
import styles from "./list.module.scss";

const ListRow = ({ onPersonSelect, person }) => {
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
        <h4>{`${person?.first_name} ${person?.last_name}`}</h4>
        <div className="list_row_person_address_div">
          <OfficeIcon />
          <p>{person?.org_name}</p>
        </div>
      </div>
      <Avatar
        src={personPictureRender(person?.picture_id?.pictures[128])}
        alt="Pipelist avatar"
      />
    </div>
  );
};

export default ListRow;
