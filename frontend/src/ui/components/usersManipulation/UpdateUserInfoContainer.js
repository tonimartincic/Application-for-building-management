import React from 'react';
import {connect} from 'react-redux';
import {deleteUserFromBuilding, editUserInfo} from '../../../actionCreators/usersActionCreators';
import UpdateUserInfo from './UpdateUserInfo';

class UpdateUserInfoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteValidation: false,
      userSelectedValidation: null,
      userSelected: null,
      user: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        privilege: null,
      },
      userPrivilege: null,
    };

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePrivilege = this.handleChangePrivilege.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  resetState = () => {
    this.setState({
      userSelectedValidation: null,
      userSelected: null,
      user: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        privilege: null,
      },
      userPrivilege: null,
    });
  };

  handleChangeUser = (event) => {
    debugger;
    for (let i = 0; i < this.props.users.length; ++i) {
      if (this.props.users[i] !== null) {
        if (this.props.users[i].id == event.target.value)
          this.setState({
            user: {
              id: this.props.users[i].id,
              firstName: this.props.users[i].firstName,
              lastName: this.props.users[i].lastName,
              mail: this.props.users[i].mail,
              privilege: this.props.users[i].privilege,
            }
          });
      }
    }

    this.setState({
      userSelected: event.target.value,
      userSelectedValidation: null,
    });
  };

  handleChangeFirstName = (event) => {
    const userTemp = this.state.user;
    userTemp.firstName = event.target.value;
    this.setState({
      user: userTemp,
    });
  };

  handleChangeLastName = (event) => {
    const userTemp = this.state.user;
    userTemp.lastName = event.target.value;
    this.setState({
      user: userTemp,
    });
  };

  handleChangeMail = (event) => {
    const userTemp = this.state.user;
    userTemp.mail = event.target.value;
    this.setState({
      user: userTemp,
    });
  };

  handleChangePrivilege = (event) => {
    this.setState({
      userPrivilege: event.target.value,
    });
  };

  handleSubmit() {
    if(this.state.userPrivilege !== 'select' && this.state.userPrivilege !== null) {
      const userTemp = this.state.user;
      userTemp.privilege = this.state.userPrivilege;
      this.setState({
        user: userTemp,
      });
    }

    if(!this.checkFirstName() || !this.checkLastName() || !this.checkEmail() || !this.checkPrivilege()) {
      console.log("error");
    } else {
      this.props.editUserInfo(this.state.user);
      this.resetState();
      this.props.toggleUpdateUserInfo();
    }
  }

  checkFirstName() {
    if(this.state.user.firstName !== '' || this.state.user.firstName !== null)
      return true;
    return false;
  }

  checkLastName() {
    if(this.state.user.lastName !== '' || this.state.user.lastName !== null)
      return true;
    return false;
  }

  checkEmail() {
    if(this.state.user.mail === null || this.state.user.mail === '') {
      return false;
    }
    for(let i = 0 ; i < this.props.users.length; i = i + 1) {
      if (this.props.users[i] !== null) {
        if (this.props.users[i].mail === this.state.user.mail && this.props.users[i].id !== this.state.user.id) {
          return false;
        }
      }
    }
    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.user.mail)) {
      return false;
    }
    return true;
  }

  checkPrivilege() {
    if ((this.state.userPrivilege === '' || this.state.userPrivilege === null || this.state.userPrivilege==='select') && (this.state.user.privilege === 'select' || this.state.user.privilege === null)) {
      return false;
    } else if (this.state.userPrivilege === 'Predstavnik' || this.state.userPrivilege === 'Upravitelj' ) {
      for (let i = 0; i < this.props.buildingUsers.length; i = i + 1) {
        if (this.props.buildingUsers[i] !== null) {
          if (this.props.buildingUsers[i].privilege === this.state.userPrivilege) {
            return false;
          }
        }
      }
    }
    return true;
  }

  deleteUser() {
    if(this.props.userData.id === this.state.user.id) {
      this.setState({
        deleteValidation: true,
      })
    } else {
      this.props.deleteUserFromBuilding(this.state.user.id);
      this.resetState();
    }
  }

  handleAlertDismiss() {
    this.setState({
      deleteValidation: false,
    });
  };


  render() {
    return (
      <UpdateUserInfo
        userSelectedValidation={this.state.userSelectedValidation}
        user={this.state.user}
        users={this.props.users}
        buildingUsers={this.props.buildingUsers}
        userSelected={this.state.userSelected}
        resetState={this.resetState}
        handleChangeUser={this.handleChangeUser}
        handleChangeFirstName={this.handleChangeFirstName}
        handleChangeLastName={this.handleChangeLastName}
        handleChangeMail={this.handleChangeMail}
        handleChangePrivilege={this.handleChangePrivilege}
        handleSubmit={this.handleSubmit}
        updateUserInfoClicked={this.props.updateUserInfoClicked}
        toggleUpdateUserInfo={this.props.toggleUpdateUserInfo}
        deleteUser={this.deleteUser}
        deleteValidation={this.state.deleteValidation}
        handleAlertDismiss={this.handleAlertDismiss}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    users: state.users,
    buildingUsers: state.buildingUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUserFromBuilding: id => dispatch(deleteUserFromBuilding(id)),
    editUserInfo: user => dispatch(editUserInfo(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserInfoContainer);

