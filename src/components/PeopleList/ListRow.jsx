import React from "react";
import OfficeIcon from "assets/icons/office_icon";
import Avatar from "components/Avatar/Avatar";
import { motion } from "framer-motion";
import { horizontalEntranceLeft } from "styles/motion/motionVariants";
import { empty_field } from "utils/configs";
import styles from "./list.module.scss";

const ListRow = ({ onPersonSelect, person, provided }) => {
  const { innerRef, draggableProps, dragHandleProps } = provided;

  const onRowClicked = () => {
    onPersonSelect(person);
  };
  return (
    <div
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      className="mb-4"
    >
      <motion.div
        data-testid="list_row_div"
        className={styles.listRow}
        role="button"
        onClick={onRowClicked}
        onKeyPress={onRowClicked}
        tabIndex={0}
        variants={horizontalEntranceLeft}
      >
        <div>
          <h4>{`${person?.first_name} ${person?.last_name}`}</h4>
          <div className="list_row_person_address_div">
            <OfficeIcon />
            <p>{person?.org_name || empty_field}</p>
          </div>
        </div>
        <Avatar src={person?.picture_id?.pictures[128]} alt="Pipelist avatar" />
      </motion.div>
    </div>
  );
};

export default ListRow;
