import React, {Component} from 'react';
import {Row, Col, Button, Collapse, FormControl, FormGroup, ListGroup, Well} from 'react-bootstrap';

const ChangePassword = props => (
  <Collapse in={props.updatePasswordClicked}>
    <Well>
      <FormGroup controlId="formControlsSelectPassword">
        <ListGroup>
          <Row>
            <Row>
              <Col md={5} mdOffset={1}>
                <p>Unesi staru lozinku: </p>
              </Col>
            </Row>
            <Row>
              <Col md={7} mdOffset={2}>
                <FormControl
                  type="password"
                  value={props.oldPassword}
                  placeholder={""}
                  onChange={props.oldPasswordChange}
                />
              </Col>
            </Row>
          </Row>
          <br />
          <Row>
            <Row>
              <Col md={5} mdOffset={1}>
                <p>Unesi novu lozinku: </p>
              </Col>
            </Row>
            <Row>
              <Col md={7} mdOffset={2}>
                <FormControl
                  type="password"
                  value={props.newPassword}
                  placeholder={""}
                  onChange={props.newPasswordChange}
                />
              </Col>
            </Row>
          </Row>
          <br />
          <Row>
            <Row>
              <Col md={5} mdOffset={1}>
                <p>Ponovi novu lozinku: </p>
              </Col>
            </Row>
            <Row>
              <Col md={7} mdOffset={2}>
                <FormControl
                  type="password"
                  value={props.newPasswordRepeat}
                  placeholder={""}
                  onChange={props.newPasswordChangeRepeat}
                />
              </Col>
            </Row>
          </Row>
        </ListGroup>
      </FormGroup>
      <Button onClick={() => props.handleSubmitPassword()}>Potvrdi</Button>
    </Well>
  </Collapse>
);

export default ChangePassword;
