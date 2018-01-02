import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../NavigationBar';
import AllUsersInfoTable from './AllUsersInfoTable';
import AddNewUserContainer from './AddNewUserContainer';
import {Col, Button, Row, Well, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import UpdateUserInfoContainer from './UpdateUserInfoContainer';
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";
import fetchBuildingUsersById from "../../../actionCreators/usersActionCreators";

class AllUsersInfo extends Component {
  componentDidMount() {
    this.props.fetchBuildings();
  }

  constructor(props) {
    super(props);
    this.state = {
      addNewUserClicked: false,
      updateUserInfoClicked: false,
      buildingId: null,
      buildingSelected: null,
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

  handleChangeBuilding = (event) => {
    const buildingIdTemp = event.target.value;
    if (buildingIdTemp !== null && buildingIdTemp !=="select") {
      this.setState({
        buildingId: event.target.value,
        buildingSelected: true,
      });
      this.props.fetchBuildingUsersById(parseInt(buildingIdTemp));
    }
    else
      this.setState({
        buildingId: event.target.value,
        buildingSelected: false,
      });
  };

  render() {
    return (
      <div>
        <NavigationBar/>
        <Row>
          <Col md={6} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Odaberi zgradu:</ControlLabel>
              <FormControl componentClass="select" placeholder="select" onChange={this.handleChangeBuilding}>
                <option value="select">Odaberi</option>
                {
                  this.props.buildings
                    .map(building => {
                        return(
                          <option value={building.id}>{building.address}</option>
                        );
                      }
                    )
                }
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Col md={8} mdOffset={1}>
          <AddNewUserContainer
            addNewUserClicked={this.state.addNewUserClicked}
            toggleAddNewUser={this.toggleAddNewUser}
            users={this.props.users}/>
          <UpdateUserInfoContainer
            updateUserInfoClicked={this.state.updateUserInfoClicked}
            toggleUpdateUserInfo={this.toggleUpdateUserInfo}
            users={this.props.users}/>
          <br/>
          <Choose>
            <When condition={this.state.buildingSelected}>
              <Col>
                <AllUsersInfoTable
                  buildingId={this.state.buildingId}
                  users={this.props.users}/>
              </Col>
            </When>
          </Choose>
        </Col>
        <Choose>
          <When condition={this.state.buildingSelected}>
            <Col md={2}>
              <Row>
                <Button onClick={() => this.toggleAddNewUser()}>Dodaj novog korisnika</Button>
              </Row>
              <br/>
              <Row>
                <Button onClick={() => this.toggleUpdateUserInfo()}>Ažuriraj podatke</Button>
              </Row>
            </Col>
          </When>
        </Choose>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    buildings: state.buildings,
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBuildings: () => dispatch(fetchBuildings()),
    fetchBuildingUsersById: id => dispatch(fetchBuildingUsersById(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersInfo);
