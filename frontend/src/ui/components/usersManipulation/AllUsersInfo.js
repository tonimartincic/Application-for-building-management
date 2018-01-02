import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../NavigationBar';
import fetchUsers from '../../../actionCreators/usersActionCreators';
import AllUsersInfoTable from './AllUsersInfoTable';
import AddNewUserContainer from './AddNewUserContainer';
import {Col, Button, Row, Well} from 'react-bootstrap';
import UpdateUserInfoContainer from './UpdateUserInfoContainer';
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";

class AllUsersInfo extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchBuildings();
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
        <Col md={8} mdOffset={1}>
          <AddNewUserContainer
            addNewUserClicked={this.state.addNewUserClicked}
            toggleAddNewUser={this.toggleAddNewUser}/>
          <UpdateUserInfoContainer
            updateUserInfoClicked={this.state.updateUserInfoClicked}
            toggleUpdateUserInfo={this.toggleUpdateUserInfo}/>
          <br/>
          <Col>
            <AllUsersInfoTable/>
          </Col>
        </Col>
        <Col md={2}>
          <Row>
            <Button onClick={() => this.toggleAddNewUser()}>Dodaj novog korisnika</Button>
          </Row>
          <br/>
          <Row>
            <Button onClick={() => this.toggleUpdateUserInfo()}>Ažuriraj podatke</Button>
          </Row>
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
    fetchBuildings: () => dispatch(fetchBuildings()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersInfo);
