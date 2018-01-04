import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Checkbox, Button, Collapse, FormControl, FormGroup, ListGroup, Well} from 'react-bootstrap';
import { toggleUserSettings } from "../../../actions/userSettingsActions";
import { toggleReminderValue } from "../../../actionCreators/userDataActionCreators";
import {editUserInfo} from "../../../actionCreators/usersActionCreators"

class Settings extends Component {
  render (){
    return(
      <div>
        <Modal
          show={this.props.userSettingsClicked}
          onHide={() => this.props.toggleUserSettings(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Postavke</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col mdOffset={2}>
                <Checkbox
                  checked={this.props.userData.reminder}
                  onChange={() => this.props.toggleReminderValue()} >
                  Želim podsjetnike za naloge.
                </Checkbox>
              </Col>
            </Row>
            <Row>
              <Col mdOffset={1}>
                <Button onClick={() => this.props.toggleUpdateUserInfoClicked()}>Promijeni osobne podatke</Button>
              </Col>
            </Row>
            <br />
            <Collapse in={this.props.updateUserInfoClicked}>
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
                          value={this.props.currentUser.firstName}
                          placeholder={this.props.currentUser.firstName}
                          onChange={this.props.handleChangeFirstName}
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
                          value={this.props.currentUser.lastName}
                          placeholder={this.props.currentUser.lastName}
                          onChange={this.props.handleChangeLastName}
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
                          value={this.props.currentUser.mail}
                          placeholder={this.props.currentUser.mail}
                          onChange={this.props.handleChangeMail}
                        />
                      </Col>
                    </Row>
                  </ListGroup>
                </FormGroup>
                <Button onClick={() => this.props.handleSubmit()}>Potvrdi</Button>
              </Well>
            </Collapse>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    users: state.users,
    userSettingsClicked: state.userSettingsClicked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUserSettings: value => dispatch(toggleUserSettings(value)),
    toggleReminderValue: () => dispatch(toggleReminderValue()),
    editUserInfo: user => dispatch(editUserInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
