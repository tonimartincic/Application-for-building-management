import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Row, ListGroup, Alert} from 'react-bootstrap';
import * as constants from '../../../constants/values';

const UpdateUserInfo = props => (
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
        <ControlLabel>Odaberi korisnika</ControlLabel>
        <FormGroup controlId="formControlsSelect" validationState={props.userSelectedValidation}>
          <FormControl
            componentClass='select'
            placeholder='Odaberi'
            onChange={props.handleChangeUser}
          >
            <option value="select">Odaberi</option>
            {
              props.buildingUsers
                .filter(user => user !== null)
                .map(userTemp => {
                  const fullName = userTemp.firstName + " " + userTemp.lastName + " - " + userTemp.mail;
                  return (
                    <option key={userTemp.id} value={userTemp.id}>
                      {fullName}
                    </option>)
                })
            }
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <Choose>
            <When
              condition={props.userSelected !== null && props.userSelected !== 'select' && props.userSelected !== 'Odaberi'}>
              <ListGroup>
                <Row>
                  <Col md={2} mdOffset={1}>
                    <p>Ime: </p>
                  </Col>
                  <Col md={6}>
                    <FormControl
                      type="text"
                      value={props.user.firstName}
                      placeholder={props.user.firstName}
                      onChange={props.handleChangeFirstName}
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
                      value={props.user.lastName}
                      placeholder={props.user.lastName}
                      onChange={props.handleChangeLastName}
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
                      value={props.user.mail}
                      placeholder={props.user.mail}
                      onChange={props.handleChangeMail}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={2} mdOffset={1}>
                    <p>Privilegija: </p>
                  </Col>
                  <Col md={6}>
                    <FormControl
                      componentClass="select"
                      placeholder="select"
                      onChange={props.handleChangePrivilege}>
                      {
                        constants.userPrivileges
                          .filter(privilege => privilege === props.user.privilege)
                          .map(privilege =>
                            <option value={privilege}>{privilege}</option>)
                      } {
                      constants.userPrivileges
                        .filter(privilege => privilege !== props.user.privilege)
                        .map(privilege =>
                          <option value={privilege}>{privilege}</option>)
                    }
                    </FormControl>
                  </Col>
                </Row>
              </ListGroup>
              <Choose>
                <When condition={props.deleteValidation}>
                  <Alert bsStyle="danger" onDismiss={() => props.handleAlertDismiss()}>
                    <h4>Ne možete obrisati sami sebe</h4>
                    <p>Samo vas drugi administrator može obrisati.</p>
                  </Alert>
                </When>
              </Choose>
              <Row>
                <Col mdOffset={1} md={3}>
                  <Button onClick={() => props.handleSubmit()}>Promijeni podatke</Button>
                </Col>
                <Col mdOffset={1} md={3}>
                  <Button onClick={() => props.deleteUser()}
                  >Obriši korisnika</Button>
                </Col>
                <Col md={4}>
                  <Button onClick={() => {
                    props.toggleUpdateUserInfo();
                    props.resetState();
                  }}>Odustani</Button>
                </Col>
              </Row>
            </When>
          </Choose>
        </FormGroup>
      </Modal.Body>
    </Modal>
  </div>
);

export default UpdateUserInfo;
