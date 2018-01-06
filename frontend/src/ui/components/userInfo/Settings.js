import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Checkbox, Button } from 'react-bootstrap';
import { toggleUserSettings } from "../../../actions/userSettingsActions";
import { toggleReminderValue } from "../../../actionCreators/userDataActionCreators";
import {editUserInfo} from "../../../actionCreators/usersActionCreators"
import ChangePersonalInfo from "./ChangePersonalInfo";
import ChangePassword from "./ChangePassword";
import { ADMINISTRATOR } from "../../../constants/values";
import * as styles from './settings.css';

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
            <Choose>
              <When condition={this.props.userData.privilege !== ADMINISTRATOR}>
                <Row>
                  <Col mdOffset={2}>
                    <Checkbox
                      checked={this.props.userData.reminder}
                      onChange={() => this.props.toggleReminderValue()}>
                      Želim podsjetnike za naloge.
                    </Checkbox>
                  </Col>
                </Row>
              </When>
            </Choose>
            <section className={styles.sectionButtons}>
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
              <Row>
                <Col mdOffset={1}>
                  <Button onClick={() => this.props.toggleUpdatePasswordClicked()}>Promijeni lozinku</Button>
                </Col>
              </Row>
              <br />
              <ChangePassword
                updatePasswordClicked={this.props.updatePasswordClicked}
                toggleUpdatePasswordClicked={this.props.toggleUpdatePasswordClicked}
                oldPasswordChange={this.props.oldPasswordChange}
                newPasswordChange={this.props.newPasswordChange}
                newPasswordChangeRepeat={this.props.newPasswordChangeRepeat}
                oldPassword={this.props.oldPassword}
                newPassword={this.props.newPassword}
                newPasswordRepeat={this.props.newPasswordRepeat}
                handleSubmitPassword={this.props.handleSubmitPassword}
                correctOldPasswordValidation={this.props.correctOldPasswordValidation}
                matchingNewPasswordsValidation={this.props.matchingNewPasswordsValidation}
                emptyPasswordFieldsValidation={this.props.emptyPasswordFieldsValidation}
              />
            </section>
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
