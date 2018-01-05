import React from 'react';
import AddNewUser from './AddNewUser';
import { connect } from 'react-redux';
import {addNewUser} from "../../../actionCreators/usersActionCreators";
import fetchApartments from "../../../actionCreators/apartmentsActionCreators";
import {thereCanOnlyBeOne} from "../../../constants/values";

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
      currentApartment: null,
      apartmentSelectedValidation: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEMail = this.handleChangeEMail.bind(this);
    this.handleChangePrivilege = this.handleChangePrivilege.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleChangeApartment = this.handleChangeApartment.bind(this);
  }

  componentDidMount(){
    this.props.fetchApartments();
  }

  handleSubmit() {
    let hasError = false;

    if(this.state.firstName === null || this.state.firstName === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.lastName === null || this.state.lastName === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      hasError = true;
    }

    if(!this.checkEmail()) {
      hasError = true;
    }

    if(!this.checkPrivilege()) {
      hasError = true;
    }

    if(this.state.currentApartment === null || this.state.currentApartment === '' ||
      this.state.currentApartment === 'select' || this.state.currentApartment === 'Odaberi')  {

      this.setState({
        apartmentSelectedValidation: 'error',
      });

      hasError = true;
    }

    if(!hasError) {
      this.props.addNewUser(this.state.firstName, this.state.lastName, this.state.email, this.state.privilege, this.state.currentApartment);
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

  handleChangeApartment(e) {
    const currentApartment = e.target.value;
    if (currentApartment !== 'select' && currentApartment !== null)
    this.setState({
      currentApartment,
      apartmentSelectedValidation: null,
    });
    else
      this.setState({
        currentApartment: null,
        apartmentSelectedValidation: null,
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

  checkPrivilege() {
    if (this.state.privilege === null || this.state.privilege === '' || this.state.privilege === 'Odaberi' || this.state.privilege==='select') {
      this.setState({
        privilegeValidationEmpty: 'error',
      });

      return false;
    } else if (thereCanOnlyBeOne.indexOf(this.state.privilege) !== -1) {
      for (let i = 0; i < this.props.buildingUsers.length; i = i + 1) {
        if (this.props.buildingUsers[i] !== null) {
          if (this.props.buildingUsers[i].privilege === this.state.privilege) {
            this.setState({
              privilegeValidationAlreadyExists: 'error',
            });

            return false;
          }
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
        apartments={this.props.apartments}
        buildingId={this.props.buildingId}
        handleChangeApartment={this.handleChangeApartment}
        apartmentSelectedValidation={this.state.apartmentSelectedValidation}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUserContainer);
