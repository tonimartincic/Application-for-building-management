import React, {Component} from 'react';
import {connect} from 'react-redux';
import Settings from './Settings';
import {toggleUserSettings} from "../../../actions/userSettingsActions";
import {toggleReminderValue} from "../../../actionCreators/userDataActionCreators";
import {editUserInfo} from "../../../actionCreators/usersActionCreators";
import {editUserPassword} from "../../../actionCreators/usersActionCreators";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateUserInfoClicked: false,
      updatePasswordClicked: false,

      user: {
        id: null,
        firstName: "",
        lastName: "",
        mail: "",
        privilege: null,
      },

      oldPassword: "",
      newPassword: "",
      newPasswordRepeat: "",

      firstNameValidation: null,
      lastNameValidation: null,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
      correctOldPasswordValidation: null,
      matchingNewPasswordsValidation: null,
      emptyPasswordFieldsValidation: null,
    };

    this.toggleUpdateUserInfoClicked = this.toggleUpdateUserInfoClicked.bind(this);
    this.toggleUpdatePasswordClicked = this.toggleUpdatePasswordClicked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.resetState = this.resetState.bind(this);
    this.oldPasswordChange = this.oldPasswordChange.bind(this);
    this.newPasswordChange = this.newPasswordChange.bind(this);
    this.newPasswordChangeRepeat = this.newPasswordChangeRepeat.bind(this);
    this.handleSubmitPassword = this.handleSubmitPassword.bind(this);

  }

  handleSubmit = () => {
    if (this.state.user.firstName === null || this.state.user.firstName === '' ||
      this.state.user.lastName === null || this.state.user.lastName === '' || !this.checkEmail()) {
      if (this.state.user.firstName === null || this.state.user.firstName === '') {
        this.setState({
          firstNameValidation: 'error',
        });
      }
      if (this.state.user.lastName === null || this.state.user.lastName === '') {
        this.setState({
          lastNameValidation: 'error',
        });
      }
      this.checkEmail();
    } else {
      this.props.editUserInfo(this.state.user);
      this.toggleUpdateUserInfoClicked();
      this.resetState();
    }
  };

  handleSubmitPassword = () => {
    if (this.state.oldPassword === "" || this.state.oldPassword === null ||
      this.state.newPassword === "" || this.state.newPassword === null ||
      this.state.newPasswordRepeat === "" || this.state.newPasswordRepeat === null) {

      this.setState({
        emptyPasswordFieldsValidation: true,
      });

      return;
    }

    if (this.state.oldPassword !== this.props.userData.password) {
      this.setState({
        correctOldPasswordValidation: true,
      });

      return;
    }

    if (this.state.newPassword !== this.state.newPasswordRepeat) {
      this.setState({
        matchingNewPasswordsValidation: true,
      });

      return;
    }

    const user = {
      id: this.state.user.id,
      password: this.state.newPassword,
    };

    this.props.editUserPassword(user);
    this.toggleUpdatePasswordClicked();
    this.resetState();
  }

  changeFirstName = (event) => {
    const userTemp = this.state.user;
    userTemp.firstName = event.target.value;
    this.setState({
      user: {
        id: userTemp.id,
        firstName: userTemp.firstName,
        lastName: userTemp.lastName,
        mail: userTemp.mail,
        privilege: userTemp.privilege,

      },
      firstNameValidation: null,
    });
  };

  handleChangeMail = (event) => {
    const userTemp = this.state.user;
    userTemp.mail = event.target.value;
    this.setState({
      user: {
        id: userTemp.id,
        firstName: userTemp.firstName,
        lastName: userTemp.lastName,
        mail: userTemp.mail,
        privilege: userTemp.privilege,
      },
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
    });
  };

  lastNameChange = (event) => {
    const userTemp = this.state.user;
    userTemp.lastName = event.target.value;
    this.setState({
      user: {
        id: userTemp.id,
        firstName: userTemp.firstName,
        lastName: userTemp.lastName,
        mail: userTemp.mail,
        privilege: userTemp.privilege,
      },
      lastNameValidation: null,
    });
  };

  oldPasswordChange = (event) => {
    this.setState({
      oldPassword: event.target.value,
      correctOldPasswordValidation: false,
      emptyPasswordFieldsValidation: false,
    })
  };

  newPasswordChange = (event) => {
    this.setState({
      newPassword: event.target.value,
      matchingNewPasswordsValidation: false,
      emptyPasswordFieldsValidation: false,
    })
  };

  newPasswordChangeRepeat = (event) => {
    this.setState({
      newPasswordRepeat: event.target.value,
      matchingNewPasswordsValidation: false,
      emptyPasswordFieldsValidation: false,
    })
  };

  checkEmail() {
    if (this.state.user.mail === null || this.state.user.mail === '') {
      this.setState({
        emailValidationEmptyString: 'error',
      });
      return false;
    }
    for (let i = 0; i < this.props.users.length; i = i + 1) {
      if (this.props.users[i] !== null) {
        if (this.props.users[i].mail === this.state.user.mail && this.state.user.id !== this.props.users[i].id) {
          this.setState({
            emailValidationAlreadyExists: 'error',
          });
          return false;
        }
      }
    }
    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.user.mail)) {
      this.setState({
        emailValidationNotCorrectFormat: 'error',
      });
      return false;
    }
    return true;
  }

  resetState() {
    this.setState({
      updateUserInfoClicked: false,
      updatePasswordClicked: false,
      user: {
        id: null,
        firstName: "",
        lastName: "",
        mail: "",
        privilege: null,
      },
      oldPassword: "",
      newPassword: "",
      newPasswordRepeat: "",
      firstNameValidation: null,
      lastNameValidation: null,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
      correctOldPasswordValidation: null,
      matchingNewPasswordsValidation: null,
      emptyPasswordFieldsValidation: null,
    })
  }

  toggleUpdateUserInfoClicked() {
    const updateUserInfoClickedTemp = this.state.updateUserInfoClicked;
    this.setState({
      user: this.props.userData,
      updateUserInfoClicked: !updateUserInfoClickedTemp,
    })
  }

  toggleUpdatePasswordClicked() {
    const updatePasswordClickedTemp = this.state.updatePasswordClicked;
    this.setState({
      user: this.props.userData,
      updatePasswordClicked: !updatePasswordClickedTemp,
    });
  }

  render() {
    return (
      <Settings
        currentUser={this.state.user}
        handleSubmit={this.handleSubmit}
        handleChangeMail={this.handleChangeMail}
        changeFirstName={this.changeFirstName}
        lastNameChange={this.lastNameChange}
        toggleUpdateUserInfoClicked={this.toggleUpdateUserInfoClicked}
        firstNameValidation={this.state.firstNameValidation}
        lastNameValidation={this.state.lastNameValidation}
        emailValidationEmptyString={this.state.emailValidationEmptyString}
        emailValidationAlreadyExists={this.state.emailValidationAlreadyExists}
        emailValidationNotCorrectFormat={this.state.emailValidationNotCorrectFormat}
        updateUserInfoClicked={this.state.updateUserInfoClicked}
        toggleUpdatePasswordClicked={this.toggleUpdatePasswordClicked}
        updatePasswordClicked={this.state.updatePasswordClicked}
        oldPasswordChange={this.oldPasswordChange}
        newPasswordChange={this.newPasswordChange}
        newPasswordChangeRepeat={this.newPasswordChangeRepeat}
        oldPassword={this.state.oldPassword}
        newPassword={this.state.newPassword}
        newPasswordRepeat={this.state.newPasswordRepeat}
        handleSubmitPassword={this.handleSubmitPassword}
        correctOldPasswordValidation={this.state.correctOldPasswordValidation}
        matchingNewPasswordsValidation={this.state.matchingNewPasswordsValidation}
        emptyPasswordFieldsValidation={this.state.emptyPasswordFieldsValidation}
      />
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
    editUserInfo: user => dispatch(editUserInfo(user)),
    editUserPassword: user => dispatch(editUserPassword(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
