import React from 'react';
import {connect} from 'react-redux';
import {deleteUser, editUserInfo} from '../../../actionCreators/usersActionCreators';
import UpdateUserInfo from './UpdateUserInfo';

class UpdateUserInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectedValidation: null,
      userSelected: null,
      user: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        privilege: null,
      },
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePrivilege = this.handleChangePrivilege.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    for (let i = 0; i < this.props.users.length; ++i) {
      if (this.props.users[i].id == event.target.value)
        this.setState({
          user: {
            id: this.props.users[i].id,
            firstName: this.props.users[i].firstName,
            lastName: this.props.users[i].lastName,
            mail: this.props.users[i].mail,
            privilege: this.props.users[i].privilege,
          }});
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
    const userTemp = this.state.user;
    userTemp.privilege = this.state.userPrivilege;
    this.setState({
      user: userTemp,
    });
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
      if (this.props.users[i].mail === this.state.user.mail && this.props.users[i].id !== this.state.user.id) {
        return false;
      }
    }
    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.user.mail)) {
      return false;
    }
    return true;
  }

  checkPrivilege() {
    if (this.state.user.privilege === '' || this.state.user.privilege === 'Odaberi' || this.state.user.privilege==='select') {
      return false;
    } else if (this.state.privilege === 'predstavnik' || this.state.privilege === 'upravitelj' ) {
      for(let i = 0 ; i < this.props.users.length; i = i + 1) {
        if (this.props.users[i].privilege === this.state.user.privilege) {
          return false;
        }
      }
    }
    return true;
  }

  render() {
    return (
      <UpdateUserInfo
        userSelectedValidation={this.state.userSelectedValidation}
        user={this.state.user}
        users={this.props.users}
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
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: (id) => (dispatch(deleteUser(id))),
    editUserInfo: (user) => (dispatch(editUserInfo(user))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserInfoContainer);

