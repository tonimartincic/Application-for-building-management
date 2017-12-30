import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../NavigationBar';
import fetchUsers from '../../../actionCreators/usersActionCreators';
import AllUsersInfoTable from './AllUsersInfoTable';
import AddNewUserContainer from './AddNewUserContainer';
import { Col, Button, Row } from 'react-bootstrap';
import UpdateUserInfo from './UpdateUserInfo';

class AllUsersInfo extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  constructor(props) {
    super(props);
    this.state = {
      addNewUserClicked: false,
      updateUserInfoClicked: false,
    };

    this.toggleAddNewUser = this.toggleAddNewUser.bind(this);
    this.toggleUpdateUserInfo = this.toggleUpdateUserInfo.bind(this);
  }

  toggleAddNewUser() {
    const addNewUserClickedTemp = this.state.addNewUserClicked;
    this.setState({
      addNewUserClicked: !addNewUserClickedTemp,
    });
  }

  toggleUpdateUserInfo() {
    const updateUserInfoClickedTemp = this.state.updateUserInfoClicked;
    this.setState({
      updateUserInfoClicked: !updateUserInfoClickedTemp,
    });
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Row>
          <Col mdOffset={1} md={3}>
            <Button onClick={() => this.toggleAddNewUser()}>Dodaj novog korisnika</Button>
          </Col>
          <Col>
            <Button onClick={() => this.toggleUpdateUserInfo()}>Ažuriraj podatke</Button>
          </Col>
        </Row>
        <AddNewUserContainer
          addNewUserClicked={this.state.addNewUserClicked}
          toggleAddNewUser={this.toggleAddNewUser}/>
        <UpdateUserInfo
          updateUserInfoClicked={this.state.updateUserInfoClicked}
          toggleUpdateUserInfo={this.toggleUpdateUserInfo}/>
        <br />
        <Col mdOffset={2}>
          <AllUsersInfoTable />
        </Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersInfo);
