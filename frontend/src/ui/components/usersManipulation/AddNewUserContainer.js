import React from 'react';
import AddNewUser from './AddNewUser';
import { connect } from 'react-redux';
import {addNewUser} from "../../../actionCreators/usersActionCreators";

class AddNewUserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      privilege: '',
      firstNameValidation: null,
      lastNameValidation: null,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEMail = this.handleChangeEMail.bind(this);
    this.handleChangePrivilege = this.handleChangePrivilege.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleSubmit() {
    if(this.state.firstName === null || this.state.firstName === '' ||
      this.state.lastName === null || this.state.lastName === '' || !this.checkEmail() || !this.checkPrivilege()) {
      if(this.state.firstName === null || this.state.firstName === '') {
        this.setState({
          firstNameValidation: 'error',
        });
      }
      if(this.state.lastName === null || this.state.lastName === '') {
        this.setState({
          lastNameValidation: 'error',
        });
      }
      this.checkPrivilege();
      this.checkEmail();
    } else {

      this.props.addNewUser(this.state.firstName, this.state.lastName, this.state.email, this.state.privilege);
      this.props.toggleAddNewUser();

      this.setState({
        firstName: null,
        lastName: null,
        email: null,
        privilege: '',
      });
    }
  }

  handleChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
      lastNameValidation: null,
    });
  }

  handleChangeEMail(e) {
    this.setState({
      email: e.target.value,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
    });
  }

  handleChangePrivilege(e) {
    this.setState({
      privilege: e.target.value,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
    });
  }

  checkEmail() {
    if(this.state.email === null || this.state.email === '') {
      this.setState({
        emailValidationEmptyString: 'error',
      });
      return false;
    }
    for(let i = 0 ; i < this.props.users.length; i = i + 1) {
      if (this.props.users[i].mail === this.state.email) {
        this.setState({
          emailValidationAlreadyExists: 'error',
        });
        return false;
      }
    }
    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.email)) {
      this.setState({
        emailValidationNotCorrectFormat: 'error',
      });
      return false;
    }
    return true;
  }

  checkPrivilege() {
    if (this.state.privilege === '' || this.state.privilege === 'Odaberi' || this.state.privilege==='select') {
      this.setState({
        privilegeValidationEmpty: 'error',
      });
      return false;
    } else if (this.state.privilege === 'Predstavnik stanara' || this.state.privilege === 'Upravitelj' ) {
      for(let i = 0 ; i < this.props.users.length; i = i + 1) {
        if (this.props.users[i].privilege === this.state.privilege) {
          this.setState({
            privilegeValidationAlreadyExists: 'error',
          });
          return false;
        }
      }
    }
    return true;
  }

  resetState() {
    this.setState({
      firstName: null,
      lastName: null,
      email: null,
      privilege: '',
      firstNameValidation: null,
      lastNameValidation: null,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
    });
  }

  render() {
    return(
      <AddNewUser
        addNewUserClicked={this.props.addNewUserClicked}
        toggleAddNewUser={this.props.toggleAddNewUser}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        privilege={this.state.email}
        firstNameValidation={this.state.firstNameValidation}
        lastNameValidation={this.state.lastNameValidation}
        emailValidationEmptyString={this.state.emailValidationEmptyString}
        emailValidationAlreadyExists={this.state.emailValidationAlreadyExists}
        emailValidationNotCorrectFormat={this.state.emailValidationNotCorrectFormat}
        privilegeValidationEmpty={this.state.privilegeValidationEmpty}
        privilegeValidationAlreadyExists={this.state.privilegeValidationAlreadyExists}
        handleSubmit={this.handleSubmit}
        handleChangeFirstName={this.handleChangeFirstName}
        handleChangeLastName={this.handleChangeLastName}
        handleChangeEMail={this.handleChangeEMail}
        handleChangePrivilege={this.handleChangePrivilege}
        resetState={this.resetState}
      />
    )
  }
}


function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (firstName, lastName, eMail, privilege) => (dispatch(addNewUser(firstName, lastName, eMail, privilege))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUserContainer);

