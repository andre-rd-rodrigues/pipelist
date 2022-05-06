import React, { useEffect } from "react";
import Button from "components/AppButton/AppButton";
import AppCollapse from "components/AppCollapse/AppCollapse";
import Avatar from "components/Avatar/Avatar";
import { Form, Modal, Row, Col } from "react-bootstrap";
import styles from "./appmodal.module.scss";

function AddPersonModal(props) {
  const { person, onHide, show, onSubmit } = props;

  //Lifecycle
  useEffect(() => {
    if (show) return (document.body.style.overflow = "hidden");
    return (document.body.style.overflow = "unset");
  }, [show]);

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
                  <Form.Control required type="text" placeholder="First name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="organization">
                  <Form.Label>Organization</Form.Label>
                  <Form.Control type="text" placeholder="Organization's name" />
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
}

export default AddPersonModal;
