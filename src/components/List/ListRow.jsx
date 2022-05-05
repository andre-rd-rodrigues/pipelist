import React from "react";
import OfficeIcon from "assets/icons/office_icon";
import Avatar from "components/Avatar/Avatar";
import styles from "./list.module.scss";

const ListRow = ({ onPersonSelect, person, provided }) => {
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
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div>
        <h4>{`${person?.first_name} ${person?.last_name}`}</h4>
        <div className="list_row_person_address_div">
          <OfficeIcon />
          <p>{person?.org_name}</p>
        </div>
      </div>
      <Avatar src={person?.picture_id?.pictures[128]} alt="Pipelist avatar" />
    </div>
  );
};

export default ListRow;
