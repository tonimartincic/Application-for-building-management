import React, {Component} from 'react';
import {Row, Col, Button, Collapse, FormControl, FormGroup, ListGroup, Well} from 'react-bootstrap';

const ChangePersonalInfo = props => (
  <Collapse in={props.updateUserInfoClicked}>
    <Well>
      <FormGroup controlId="formControlsSelect">
        <ListGroup>
          <Row>
            <Col md={2} mdOffset={1}>
              <p>Ime: </p>
            </Col>
            <Col md={6}>
              <FormControl
                type="text"
                value={props.currentUser.firstName}
                placeholder={props.currentUser.firstName}
                onChange={props.changeFirstName}
              />
            </Col>
          </Row>
          <Row>
            <Col md={2} mdOffset={1}>
              <p>Prezime: </p>
            </Col>
            <Col md={6}>
              <FormControl
                type="text"
                value={props.currentUser.lastName}
                placeholder={props.currentUser.lastName}
                onChange={props.lastNameChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={2} mdOffset={1}>
              <p>E - Mail: </p>
            </Col>
            <Col md={6}>
              <FormControl
                type="text"
                value={props.currentUser.mail}
                placeholder={props.currentUser.mail}
                onChange={props.handleChangeMail}
              />
            </Col>
          </Row>
        </ListGroup>
      </FormGroup>
      <Button onClick={() => props.handleSubmit()}>Potvrdi</Button>
    </Well>
  </Collapse>
);


export default ChangePersonalInfo;
