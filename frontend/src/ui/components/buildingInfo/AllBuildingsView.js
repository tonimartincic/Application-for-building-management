import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../navigationBar/NavigationBar';
import BuildingTable from './BuildingTable';
import AddNewBuilding from './AddNewBuilding';
import UpdateBuilding from './UpdateBuilding';
import {Col, Button, Row, FormGroup, FormControl, ControlLabel, PageHeader, Well} from 'react-bootstrap';
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";
import fetchBuildingUsersById from "../../../actionCreators/usersActionCreators";
import { fetchUsers } from "../../../actionCreators/usersActionCreators";
import fetchApartments from "../../../actionCreators/apartmentsActionCreators";

class AllBuildingsView extends Component {
  componentDidMount() {
    this.props.fetchBuildings();
    this.props.fetchUsers();
  }

  constructor(props) {
    super(props);
    this.state = {
      addNewBuildingClicked: false,
      updateBuildingClicked: false,
      buildingId: null,
      buildingSelected: null,
      buildingAddress: null,
      buildingAddressValidation: null,
      addressAlreadyExists: null,
    };

    this.toggleAddNewBuilding = this.toggleAddNewBuilding.bind(this);
    this.toggleUpdateBuildingClicked = this.toggleUpdateBuildingClicked.bind(this);
  }

  toggleUpdateBuildingClicked() {
    const updateBuildingClickedTemp = this.state.updateBuildingClickedTemp;
    this.setState({
      updateBuildingClickedTemp: !updateBuildingClickedTemp,
    });
  }

  toggleAddNewBuilding() {
    const addNewBuildingClickedTemp = this.state.addNewBuildingClicked;
    this.setState({
      addNewBuildingClicked: !addNewBuildingClickedTemp,
    });
  }

  handleChangeAddress(e) {
    this.setState({
      buildingAddress: e.target.value,
      buildingAddressValidation: null,
      addressAlreadyExists: null,
    });
  }

  handleSubmitNewBuilding() {
    if (this.state.buildingAddress === null || this.state.buildingAddress === "") {
      this.setState({
        buildingAddressValidation: 'error'
      });
    } else if (this.addressExists()) {
      this.setState({
        addressAlreadyExists: 'error'
      });
    } else {

    }
  }

  addressExists() {
    for (let i  = 0 ; i < this.props.buildings.length ; i++ ) {
      if(this.props.buildings.address === this.state.buildingAddress)
        return true;
    }
    return false;
  }


  render() {
    return (
      <div>
        <NavigationBar/>
        <Row>
          <Col md={8} mdOffset={2}>
            <PageHeader>Zgrade</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <BuildingTable />
          </Col>
        </Row>
        <Row>
          <div>
            <Col md={8} mdOffset={3}>
              <Button
                onClick={() => this.toggleAddNewBuilding()}
              >Dodaj zgradu</Button>

              <Button
                onClick={() => this.toggleUpdateBuildingClicked()}
              >Ažuriraj zgradu</Button>
            </Col>
          </div>
          <AddNewBuilding
            addNewBuildingClicked={this.state.addNewBuildingClicked}
            toggleAddNewBuilding={this.toggleAddNewBuilding}
            buildingNameValidation={this.state.buildingNameValidation}
            handleChangeAddress={this.handleChangeAddress}
            handleSubmitNewBuilding={this.handleSubmitNewBuilding}
            addressAlreadyExists={this.addressAlreadyExists}
          />
          <UpdateBuilding
            updateBuildingClicked={this.state.updateBuildingClicked}
            toggleUpdateBuildingClicked={this.toggleUpdateBuildingClicked}
          />
        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllBuildingsView);
