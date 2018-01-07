import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Row, ListGroup, Alert} from 'react-bootstrap';
import * as constants from '../../../constants/values';

const UpdateBuilding = props => (
  <div>
    <Modal
      show={props.updateUserInfoClicked}
      onHide={() => {
        props.toggleUpdateUserInfo();
        props.resetState();
      }
      }
    >
      <Modal.Header closeButton>
        <Modal.Title>Ažuriraj podatke za korisnika</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
    </Modal>
  </div>
);

export default UpdateBuilding;
