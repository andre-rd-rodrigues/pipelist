import React, { useState } from "react";
import Button from "components/AppButton/AppButton";
import Avatar from "components/Avatar/Avatar";
import ListModalDetails from "components/List/ListModalDetails";
import { Modal } from "react-bootstrap";
import { data_fields, empty_field } from "utils/configs";
import styles from "./appmodal.module.scss";
import ConfirmationModal from "./ConfirmationModal";

function PersonModal(props) {
  const { person, onHide, show, onDeletePerson, onOpenModal } = props;
  const [confirmationModal, setConfirmationModal] = useState(false);

  //Actions
  const handleConfirmationModalHide = (responseType) => {
    setConfirmationModal(false);
    if (responseType === "cancel") return onOpenModal();
    return onDeletePerson(person?.id);
  };

  return (
    <>
      <Modal
        {...props}
        className={styles.person_modal}
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Person Information</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="person_modal_title_details">
            <Avatar
              src={person?.picture_id?.pictures[128]}
              alt="Pipelist avatar"
              size={5.5}
              profileId={person?.id}
            />
            <h4>{`${person?.first_name} ${person?.last_name}`}</h4>
            <h4>
              {person?.phone?.[0].value
                ? `+ ${person?.phone?.[0].value}`
                : empty_field}
            </h4>
          </div>
          <div className="person_modal_details">
            <div className="person_modal_details_field">
              <ListModalDetails
                label="Email"
                value={person?.email?.[0].value || empty_field}
              />
              <ListModalDetails
                label="Organization"
                value={person?.org_name || empty_field}
              />
              <ListModalDetails
                label="Assistant"
                value={person?.[data_fields.assistant] || empty_field}
              />
              <ListModalDetails
                label="Groups"
                value={person?.[data_fields.groups] || empty_field}
              />
              <ListModalDetails
                label="Location"
                value={person?.org_id?.address || empty_field}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            label="Delete"
            color="red"
            onClick={() => {
              onHide();
              setConfirmationModal(true);
            }}
          />
          <Button label="Back" onClick={onHide} />
        </Modal.Footer>
      </Modal>
      <ConfirmationModal
        title="Delete person"
        message="This action will permantly erase this profile, are you sure you want to procced?"
        show={confirmationModal}
        onHide={handleConfirmationModalHide}
        backdrop="static"
      />
    </>
  );
}

export default PersonModal;
