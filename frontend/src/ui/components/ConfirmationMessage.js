import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationMessage = props => (
  <div>
    <Modal show={props.deleteAnnouncementButtonClicked} >
      <Modal.Header >
        <Modal.Title>Brisanje objave</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Jeste li sigurni da želite obrisati ovu objavu?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          props.deleteAnnouncement();
          props.setValueOfDeleteAnnouncementButtonClicked(false);
        }}
        >
          Obriši
        </Button>
        <Button onClick={() => props.setValueOfDeleteAnnouncementButtonClicked(false)}>Poništi</Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default ConfirmationMessage;

