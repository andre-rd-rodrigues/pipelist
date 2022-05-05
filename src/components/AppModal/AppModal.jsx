import React, { useState } from "react";
import Button from "components/AppButton/AppButton";
import AppCollapse from "components/AppCollapse/AppCollapse";
import Avatar from "components/Avatar/Avatar";
import ListModalDetails from "components/List/ListModalDetails";
import { Form, Modal, Row, Col } from "react-bootstrap";
import { personPictureRender } from "utils/globalUtils";
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
      onOpenModal();
    } else {
      return onDeletePerson(person?.id);
    }
  };

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
                  src={personPictureRender(person?.picture_id?.pictures[128])}
                  alt="Pipelist avatar"
                  size={6}
                />
                <h4>{`${person?.first_name} ${person?.last_name}`}</h4>
                <h4>+ {person?.phone?.[0].value}</h4>
              </div>
              <div className="person_modal_details">
                <div className="person_modal_details_field">
                  <ListModalDetails
                    label="Email"
                    value={person?.email?.[0].value}
                  />
                  <ListModalDetails
                    label="Organization"
                    value={person?.org_name}
                  />
                  <ListModalDetails
                    label="Assistant"
                    value={person?.["7ab9173fa54626355c24ae76c7487743aad362ae"]}
                  />
                  <ListModalDetails
                    label="Groups"
                    value={person?.f7cf8b3ea06ed72293f69d25fd6406079b1cedfe}
                  />
                  <ListModalDetails
                    label="Location"
                    value={person?.org_id?.address}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                label="Delete"
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
            message="This action is permant, are you sure you want to procced?"
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
                src={personPictureRender(person?.picture_id?.pictures[128])}
                alt="Pipelist avatar"
                size={6}
              />
            </div>
            <div>
              <Form className="mt-5" onSubmit={onSubmit}>
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
                  <Form.Group className="mb-3" controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" />
                  </Form.Group>
                </AppCollapse>
                <div className="d-flex mt-5 mb-2 justify-content-between">
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
