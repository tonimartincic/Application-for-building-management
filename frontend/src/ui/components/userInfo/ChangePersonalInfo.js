import React, {Component} from 'react';
import {Row, Col, Button, Collapse, FormControl, FormGroup, ListGroup, Well} from 'react-bootstrap';

const ChangePersonalInfo = props => (
  <Collapse in={props.updateUserInfoClicked}>
    <Well>
      <ListGroup>
        <Row>
          <Col md={2} mdOffset={1}>
            <p>Ime: </p>
          </Col>
          <Col md={6}>
            <FormGroup controlId="formControlsSelectFirstName">
              <FormControl
                type="text"
                value={props.currentUser.firstName}
                placeholder={props.currentUser.firstName}
                onChange={props.changeFirstName}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2} mdOffset={1}>
            <p>Prezime: </p>
          </Col>
          <Col md={6}>
            <FormGroup controlId="formControlsSelectLastName">
              <FormControl
                type="text"
                value={props.currentUser.lastName}
                placeholder={props.currentUser.lastName}
                onChange={props.lastNameChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2} mdOffset={1}>
            <p>E - Mail: </p>
          </Col>
          <Col md={6}>
            <FormGroup controlId="formControlsSelectMail">
              <FormControl
                type="text"
                value={props.currentUser.mail}
                placeholder={props.currentUser.mail}
                onChange={props.handleChangeMail}
              />
            </FormGroup>
          </Col>
        </Row>
      </ListGroup>
      <Button onClick={() => props.handleSubmit()}>Potvrdi</Button>
    </Well>
  </Collapse>
);

export default ChangePersonalInfo;
