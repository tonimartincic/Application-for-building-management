import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import { toggleUserSettings } from "../../../actions/userSettingsActions";
import { toggleReminderValue } from "../../../actionCreators/userDataActionCreators";
import {editUserInfo} from "../../../actionCreators/usersActionCreators";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateUserInfoClicked: false,
      user: {
        id: null,
        firstName: "",
        lastName: "",
        mail: "",
        privilege: null,
      },
      firstNameValidation: null,
      lastNameValidation: null,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
    };

    this.toggleUpdateUserInfoClicked = this.toggleUpdateUserInfoClicked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleSubmit() {
    if(this.state.user.firstName === null || this.state.user.firstName === '' ||
      this.state.user.lastName === null || this.state.user.lastName === '' || !this.checkEmail()) {
      if(this.state.user.firstName === null || this.state.user.firstName === '') {
        this.setState({
          firstNameValidation: 'error',
        });
      }
      if(this.state.user.lastName === null || this.state.user.lastName === '') {
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
  }

  handleChangeFirstName = (event) => {
    const userTemp = this.props.userData;
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

  handleChangeLastName = (event) => {
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

  checkEmail() {
    if(this.state.user.mail === null || this.state.user.mail === '') {
      this.setState({
        emailValidationEmptyString: 'error',
      });
      return false;
    }
    for(let i = 0 ; i < this.props.users.length; i = i + 1) {
      if(this.props.users[i] !== null) {
        if (this.props.users[i].mail === this.state.user.mail) {
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
      user: {
        id: null,
        firstName: "",
        lastName: "",
        mail: "",
        privilege: null,
      },
      firstNameValidation: null,
      lastNameValidation: null,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
    })
  }

  toggleUpdateUserInfoClicked() {
    const updateUserInfoClickedTemp = this.state.updateUserInfoClicked;
    this.setState({
      user: this.props.userData,
      updateUserInfoClicked: !updateUserInfoClickedTemp,
    })
  }

  render (){
    return(
      <Settings
        currentUser={this.state.user}
        handleSubmit={this.handleSubmit}
        handleChangeFirstName={this.handleChangeFirstName}
        handleChangeLastName={this.handleChangeLastName}
        handleChangeMail={this.handleChangeMail}
        toggleUpdateUserInfoClicked={this.toggleUpdateUserInfoClicked}
        firstNameValidation={this.state.firstNameValidation}
        lastNameValidation={this.state.lastNameValidation}
        emailValidationEmptyString={this.state.emailValidationEmptyString}
        emailValidationAlreadyExists={this.state.emailValidationAlreadyExists}
        emailValidationNotCorrectFormat={this.state.emailValidationNotCorrectFormat}
        updateUserInfoClicked={this.state.updateUserInfoClicked}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
