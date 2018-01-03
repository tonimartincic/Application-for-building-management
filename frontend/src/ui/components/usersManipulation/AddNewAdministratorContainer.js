import React from 'react';
import AddNewAdministrator from './AddNewAdministrator';
import { connect } from 'react-redux';
import {addNewUser} from "../../../actionCreators/usersActionCreators";
import fetchApartments from "../../../actionCreators/apartmentsActionCreators";
import { addNewAdministrator } from "../../../actionCreators/usersActionCreators";

class AddNewAdministratorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      firstNameValidation: null,
      lastNameValidation: null,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEMail = this.handleChangeEMail.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleSubmit() {
    if(this.state.firstName === null || this.state.firstName === '' ||
      this.state.lastName === null || this.state.lastName === '' || !this.checkEmail()) {
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
      this.checkEmail();
    } else {
      this.props.addNewAdministrator(this.state.firstName, this.state.lastName, this.state.email);
      this.props.toggleNewAdministratorClicked();

      this.setState({
        firstName: null,
        lastName: null,
        email: null,
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

  checkEmail() {
    if(this.state.email === null || this.state.email === '') {
      this.setState({
        emailValidationEmptyString: 'error',
      });
      return false;
    }
    for(let i = 0 ; i < this.props.users.length; i = i + 1) {
      if(this.props.users[i] !== null) {
        if (this.props.users[i].mail === this.state.email) {
          this.setState({
            emailValidationAlreadyExists: 'error',
          });
          return false;
        }
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
      <AddNewAdministrator
        addNewAdministratorClicked={this.props.addNewAdministratorClicked}
        toggleNewAdministratorClicked={this.props.toggleNewAdministratorClicked}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        firstNameValidation={this.state.firstNameValidation}
        lastNameValidation={this.state.lastNameValidation}
        emailValidationEmptyString={this.state.emailValidationEmptyString}
        emailValidationAlreadyExists={this.state.emailValidationAlreadyExists}
        emailValidationNotCorrectFormat={this.state.emailValidationNotCorrectFormat}
        handleSubmit={this.handleSubmit}
        handleChangeFirstName={this.handleChangeFirstName}
        handleChangeLastName={this.handleChangeLastName}
        handleChangeEMail={this.handleChangeEMail}
        resetState={this.resetState}
      />
    )
  }
}


function mapStateToProps(state) {
  return {
    apartments: state.apartments,
    buildingUsers: state.buildingUsers,
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (firstName, lastName, eMail, privilege, id) => (dispatch(addNewUser(firstName, lastName, eMail, privilege, id))),
    fetchApartments: () => dispatch(fetchApartments()),
    addNewAdministrator: (firstName, lastName, eMail) => dispatch(addNewAdministrator(firstName, lastName, eMail)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewAdministratorContainer);
