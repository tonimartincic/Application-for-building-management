import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Checkbox, Button} from 'react-bootstrap';
import { toggleUserSettings } from "../../../actions/userSettingsActions";
import { toggleReminderValue } from "../../../actionCreators/userDataActionCreators";
import {editUserInfo} from "../../../actionCreators/usersActionCreators"
import ChangePersonalInfo from "./ChangePersonalInfo";

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
            <ChangePersonalInfo
              currentUser={this.props.currentUser}
              updateUserInfoClicked={this.props.updateUserInfoClicked}
              lastNameChange={this.props.lastNameChange}
              handleChangeMail={this.props.handleChangeMail}
              changeFirstName={this.props.changeFirstName}
              handleSubmit={this.props.handleSubmit}
            />
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
