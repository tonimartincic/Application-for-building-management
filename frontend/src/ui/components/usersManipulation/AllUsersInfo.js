import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../NavigationBar';
import fetchUsers from '../../../actionCreators/usersActionCreators';
import AllUsersInfoTable from './AllUsersInfoTable';
import AddNewUserContainer from './AddNewUserContainer';
import { Col, Button } from 'react-bootstrap';


class AllUsersInfo extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  constructor(props) {
    super(props);
    this.state = {
      addNewUserClicked: false,
    }

    this.toggleAddNewUser = this.toggleAddNewUser.bind(this);
  }

  toggleAddNewUser() {
    const addNewUserClickedTemp = this.state.addNewUserClicked;
    this.setState({
      addNewUserClicked: !addNewUserClickedTemp,
    });
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Col mdOffset={1}>
          <Button onClick={() => this.toggleAddNewUser()}>Dodaj novog korisnika</Button>
        </Col>
        <AddNewUserContainer
          addNewUserClicked={this.state.addNewUserClicked}
          toggleAddNewUser={this.toggleAddNewUser}/>
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
