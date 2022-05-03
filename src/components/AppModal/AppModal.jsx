import Avatar from "components/Avatar/Avatar";
import React from "react";
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
                  <Col
                    sm={personResponsiveValues.label}
                    md={personResponsiveValues.label}
                    lg={personResponsiveValues.label}
                  >
                    <div className="person_modal_details_field_label">
                      <h5>Email</h5>
                    </div>
                  </Col>
                  <Col
                    sm={personResponsiveValues.description}
                    md={personResponsiveValues.description}
                    lg={personResponsiveValues.description}
                  >
                    <p>{person?.cc_email}</p>
                  </Col>
                </Row>
                <Row className="align-items-baseline justify-content-center">
                  <Col
                    sm={personResponsiveValues.label}
                    md={personResponsiveValues.label}
                    lg={personResponsiveValues.label}
                    className="d-flex justify-content-end"
                  >
                    <h5>Organization</h5>
                  </Col>
                  <Col
                    sm={personResponsiveValues.description}
                    md={personResponsiveValues.description}
                    lg={personResponsiveValues.description}
                  >
                    <p>{person?.org_name}</p>
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
