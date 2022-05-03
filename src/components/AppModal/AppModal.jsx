import React from "react";
import Avatar from "components/Avatar/Avatar";
import { Col, Modal, Row } from "react-bootstrap";
import styles from "./appmodal.module.scss";

const AppModal = (props) => {
  const { show = false, onHide, type = "default", person } = props;

  const personResponsiveValues = { label: 4, description: 8 };

  switch (type) {
    case "person":
      return (
        <Modal
          {...props}
          className={styles.person_modal}
          show={show}
          onHide={onHide}
          data-testid="person_modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Person Information</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="person_modal_title_details">
              <Avatar src={person?.imageSrc} alt="Pipelist avatar" size={6} />
              <h4>{person?.name}</h4>
              <h4>{person?.phone?.value}</h4>
            </div>
            <div className="person_modal_details">
              <div className="person_modal_details_field">
                <Row className="align-items-baseline justify-content-center">
                  <Col sm={4} md={4} lg={personResponsiveValues.label}>
                    <div className="person_modal_details_field_label">
                      <h5>Email</h5>
                    </div>
                  </Col>
                  <Col sm={8} md={8} lg={personResponsiveValues.description}>
                    <p>{person?.cc_email}</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={onHide}>Back</button>
          </Modal.Footer>
        </Modal>
      );
    default:
      return null;
  }
};

export default AppModal;
