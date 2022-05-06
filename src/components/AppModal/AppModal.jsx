import React, { useState, useEffect } from "react";
import Button from "components/AppButton/AppButton";
import AppCollapse from "components/AppCollapse/AppCollapse";
import Avatar from "components/Avatar/Avatar";
import ListModalDetails from "components/List/ListModalDetails";
import { Form, Modal, Row, Col } from "react-bootstrap";
import { data_fields, empty_field } from "utils/configs";
import styles from "./appmodal.module.scss";
import ConfirmationModal from "./ConfirmationModal";

const AppModal = (props) => {
  const {
    show = false,
    onHide,
    type = "default",
    person,
    onSubmit,
    onDeletePerson,
    onOpenModal
  } = props;
  const [confirmationModal, setConfirmationModal] = useState(false);

  //Actions
  const handleConfirmationModalHide = (responseType) => {
    if (responseType === "cancel") {
      setConfirmationModal(false);
      return onOpenModal();
    } else {
      setConfirmationModal(false);
      return onDeletePerson(person?.id);
    }
  };

  //Lifecycle
  useEffect(() => {
    if (show) return (document.body.style.overflow = "hidden");
    return (document.body.style.overflow = "unset");
  }, [show]);

  //Modal type
  switch (type) {
    case "person":
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
                  editPicture={person?.id}
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
    case "add_person":
      return (
        <Modal
          size="lg"
          {...props}
          className={styles.add_person}
          show={show}
          onHide={onHide}
          centered
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Add Person</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="person_modal_title_details">
              <Avatar
                src={person?.picture_id?.pictures[128]}
                alt="Pipelist avatar"
                size={6}
              />
            </div>
            <div>
              <Form className="mt-4" onSubmit={onSubmit}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="organization">
                      <Form.Label>Organization</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Organization's name"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="number" placeholder="Phone number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <AppCollapse>
                  <Form.Group className="mb-3" controlId="assistant">
                    <Form.Label>Assistant</Form.Label>
                    <Form.Control type="text" placeholder="Assistant's name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="groups">
                    <Form.Label>Groups</Form.Label>
                    <Form.Control type="text" placeholder="Groups" />
                  </Form.Group>
                </AppCollapse>
                <div className="d-flex mt-3 mb-2 justify-content-between">
                  <Button label="Back" onClick={onHide} type="button" />
                  <Button label="Submit" color="green" type="submit" />
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      );
    default:
      return null;
  }
};

export default AppModal;
