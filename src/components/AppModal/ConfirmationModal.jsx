import React from "react";
import Button from "components/AppButton/AppButton";
import { Modal } from "react-bootstrap";
import styles from "./appmodal.module.scss";

const ConfirmationModal = (props) => {
  const { title, message, onHide } = props;

  return (
    <Modal {...props} show={props.show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>
          <h3>{title}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button color="red" label="Delete" onClick={() => onHide("delete")} />
        <Button label="Cancel" onClick={() => onHide("cancel")} />
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
