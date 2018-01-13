import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../navigationBar/NavigationBar';
import AllUsersInfoTable from './AllUsersInfoTable';
import AddNewUserContainer from './AddNewUserContainer';
import {Col, Button, Row, FormGroup, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import UpdateUserInfoContainer from './UpdateUserInfoContainer';
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";
import fetchBuildingUsersById from "../../../actionCreators/usersActionCreators";
import { fetchUsers } from "../../../actionCreators/usersActionCreators";
import fetchApartments from "../../../actionCreators/apartmentsActionCreators";
import AdministratorsTable from "./AdministratorsTable";
import AddNewAdministratorContainer from './AddNewAdministratorContainer';
import RemoveAdministrator from './RemoveAdministrator';
import * as styles from './allUsersInfo.css';

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
          <Col md={8} mdOffset={2}>
            <PageHeader>Administratori</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <AdministratorsTable />
          </Col>
        </Row>
        <Row>
          <div>
            <Col md={8} mdOffset={3}>
              <Button
                className={styles.button}
                onClick={() => this.toggleNewAdministratorClicked()}
              >Dodaj administratora</Button>

              <Button
                className={styles.button}
                onClick={() => this.toggleAdministratorInfoClicked()}
              >Obriši administratora</Button>
            </Col>
          </div>
          <AddNewAdministratorContainer
            addNewAdministratorClicked={this.state.addNewAdministratorClicked}
            toggleNewAdministratorClicked={this.toggleNewAdministratorClicked}
            />
          <RemoveAdministrator
            updateAdministratorInfoClicked={this.state.updateAdministratorInfoClicked}
            toggleAdministratorInfoClicked={this.toggleAdministratorInfoClicked}
          />
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <PageHeader>Ostali korisnici:<small> (po zgradama)</small></PageHeader>
          </Col>
        </Row>
        <Row>
          <Col md={4} mdOffset={3}>
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
        <Col md={8} mdOffset={3}>
          <AddNewUserContainer
            addNewUserClicked={this.state.addNewUserClicked}
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
            <Col md={8} mdOffset={4}>
              <Button
                className={styles.button}
                onClick={() => this.toggleAddNewUser()}
              >Dodaj novog korisnika</Button>

              <Button
                className={styles.button}
                onClick={() => this.toggleUpdateUserInfo()}
              >Ažuriraj podatke</Button>
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
