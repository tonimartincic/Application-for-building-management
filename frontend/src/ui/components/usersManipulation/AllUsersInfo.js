import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../navigationBar/NavigationBar';
import AllUsersInfoTable from './AllUsersInfoTable';
import AddNewUserContainer from './AddNewUserContainer';
import {Col, Button, Row, FormGroup, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';
import UpdateUserInfoContainer from './UpdateUserInfoContainer';
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";
import fetchBuildingUsersById from "../../../actionCreators/usersActionCreators";
import { fetchUsers } from "../../../actionCreators/usersActionCreators";
import fetchApartments from "../../../actionCreators/apartmentsActionCreators";
import AdministratorsTable from "./AdministratorsTable";
import AddNewAdministratorContainer from './AddNewAdministratorContainer';

class AllUsersInfo extends Component {
  componentDidMount() {
    this.props.fetchBuildings();
    this.props.fetchUsers();
  }

  constructor(props) {
    super(props);
    this.state = {
      addNewUserClicked: false,
      updateUserInfoClicked: false,
      addNewAdministratorClicked: false,
      updateAdministratorInfoClicked: false,
      buildingId: null,
      buildingSelected: null,
    };

    this.toggleAddNewUser = this.toggleAddNewUser.bind(this);
    this.toggleNewAdministratorClicked = this.toggleNewAdministratorClicked.bind(this);
    this.toggleUpdateUserInfo = this.toggleUpdateUserInfo.bind(this);
    this.toggleAdministratorInfoClicked = this.toggleAdministratorInfoClicked.bind(this);
  }

  toggleNewAdministratorClicked() {
    debugger;
    const addNewAdministratorClickedTemp = this.state.addNewAdministratorClicked;
    this.setState({
      addNewAdministratorClicked: !addNewAdministratorClickedTemp,
    });
  }

  toggleAddNewUser() {
    const addNewUserClickedTemp = this.state.addNewUserClicked;
    this.props.fetchApartments();
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
  toggleAdministratorInfoClicked() {
    const updateAdministratorInfoClickedTemp = this.state.updateAdministratorInfoClicked;
    this.setState({
      updateAdministratorInfoClicked: !updateAdministratorInfoClickedTemp,
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
          <Col md={6}>
            <AdministratorsTable />
            <AddNewAdministratorContainer
              addNewAdministratorClicked={this.state.addNewAdministratorClicked}
              toggleNewAdministratorClicked={this.toggleNewAdministratorClicked}
              />
          </Col>
          <Col md={2}>
            <Row>
              <Button onClick={() => this.toggleNewAdministratorClicked()}>Dodaj administratora</Button>
            </Row>
            <br/>
            <Row>
              <Button onClick={() => this.toggleAdministratorInfoClicked()}>Ažuriraj podatke o administratorima</Button>
            </Row>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col mdOffset={1}>
              <PageHeader>Ostali korisnici:<small> (po zgradama)</small></PageHeader>
            </Col>
          </Row>
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
            addNewAdministratorClicked={this.state.addNewAdministratorClicked}
            toggleAddNewUser={this.toggleAddNewUser}
            buildingId={this.state.buildingId}/>
          <UpdateUserInfoContainer
            updateUserInfoClicked={this.state.updateUserInfoClicked}
            toggleUpdateUserInfo={this.toggleUpdateUserInfo}
            buildingUsers={this.props.buildingUsers}/>
          <br/>
          <Choose>
            <When condition={this.state.buildingSelected}>
              <Col>
                <AllUsersInfoTable
                  buildingId={this.state.buildingId}
                  buildingUsers={this.props.buildingUsers}/>
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
    buildingUsers: state.buildingUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBuildings: () => dispatch(fetchBuildings()),
    fetchBuildingUsersById: id => dispatch(fetchBuildingUsersById(id)),
    fetchApartments: () => dispatch(fetchApartments()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersInfo);
