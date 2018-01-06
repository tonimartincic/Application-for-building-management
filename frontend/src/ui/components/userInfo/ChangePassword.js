import React, {Component} from 'react';
import {Row, Col, Button, Collapse, FormControl, FormGroup, ListGroup, Well, Alert} from 'react-bootstrap';

const ChangePassword = props => (
  <Collapse in={props.updatePasswordClicked}>
    <Well>
      <ListGroup>
        <Row>
          <Row>
            <Col md={5} mdOffset={1}>
              <p>Unesi staru lozinku: </p>
            </Col>
          </Row>
          <Row>
            <Col md={7} mdOffset={2}>
              <FormGroup controlId="formControlsSelectOldPassword">
                <FormControl
                  type="password"
                  value={props.oldPassword}
                  placeholder={""}
                  onChange={props.oldPasswordChange}
                />
              </FormGroup>
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
              <FormGroup controlId="formControlsSelectNewPassword">
                <FormControl
                  type="password"
                  value={props.newPassword}
                  placeholder={""}
                  onChange={props.newPasswordChange}
                />
              </FormGroup>
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
              <FormGroup controlId="formControlsSelectNewPasswordRepeated">
                <FormControl
                  type="password"
                  value={props.newPasswordRepeat}
                  placeholder={""}
                  onChange={props.newPasswordChangeRepeat}
                />
              </FormGroup>
            </Col>
          </Row>
        </Row>
      </ListGroup>
      <Choose>
        <When condition={props.correctOldPasswordValidation}>
          <Alert bsStyle="danger">
            <p>Krivo unesena stara lozinka.</p>
          </Alert>
        </When>
      </Choose>
      <Choose>
        <When condition={props.matchingNewPasswordsValidation}>
          <Alert bsStyle="danger">
            <p>Nova lozinka se ne podudara sa ponovljenom novom lozinkom.</p>
          </Alert>
        </When>
      </Choose>
      <Choose>
        <When condition={props.emptyPasswordFieldsValidation}>
          <Alert bsStyle="danger">
            <p>Morate popuniti sva polja.</p>
          </Alert>
        </When>
      </Choose>
      <Button onClick={() => props.handleSubmitPassword()}>Potvrdi</Button>
    </Well>
  </Collapse>
);

export default ChangePassword;
