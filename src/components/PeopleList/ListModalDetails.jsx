import React from "react";
import { Col, Row } from "react-bootstrap";

const ListModalDetails = ({ label, value }) => {
  return (
    <Row className="align-items-baseline justify-content-center">
      <Col sm={4} md={4} lg={4}>
        <div className="person_modal_details_field_label">
          <h5>{label}</h5>
        </div>
      </Col>
      <Col sm={8} md={8} lg={8}>
        <p>{value}</p>
      </Col>
    </Row>
  );
};

export default ListModalDetails;
