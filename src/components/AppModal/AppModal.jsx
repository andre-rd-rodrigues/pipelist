import React from "react";
import Avatar from "components/Avatar/Avatar";
import ListModalDetails from "components/List/ListModalDetails";
import { Modal } from "react-bootstrap";
import { personPictureRender } from "utils/globalUtils";
import styles from "./appmodal.module.scss";

const AppModal = (props) => {
  const { show = false, onHide, type = "default", person } = props;

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
            <button onClick={onHide}>Back</button>
          </Modal.Footer>
        </Modal>
      );
    default:
      return null;
  }
};

export default AppModal;
