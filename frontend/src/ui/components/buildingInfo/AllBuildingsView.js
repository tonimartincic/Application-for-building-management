import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../navigationBar/NavigationBar';
import BuildingTable from './BuildingTable';
import AddNewBuilding from './AddNewBuilding';
import UpdateBuilding from './UpdateBuilding';
import {Col, Button, Row, PageHeader} from 'react-bootstrap';
import fetchBuildings, {addNewBuilding} from "../../../actionCreators/buildingsActionCreators";
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
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmitNewBuilding = this.handleSubmitNewBuilding.bind(this);
  }

  toggleUpdateBuildingClicked() {
    const updateBuildingClickedTemp = this.state.updateBuildingClicked;
    this.setState({
      updateBuildingClicked: !updateBuildingClickedTemp,
    });
  }

  toggleAddNewBuilding() {
    const addNewBuildingClickedTemp = this.state.addNewBuildingClicked;
    this.setState({
      addNewBuildingClicked: !addNewBuildingClickedTemp,
    });
    if (addNewBuildingClickedTemp === true) {
      this.resetAddress();
    }
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
      const building = {
        address: this.state.buildingAddress,
      };
      this.props.addNewBuilding(building);
      this.toggleAddNewBuilding();
    }
  }

  addressExists() {
    for (let i  = 0 ; i < this.props.buildings.length ; i++ ) {
      if(this.props.buildings[i].address === this.state.buildingAddress)
        return true;
    }
    return false;
  }

  resetAddress() {
    this.setState({
      buildingAddress: null,
      buildingAddressValidation: null,
      addressAlreadyExists: null,
    })
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
              <Row>
                <Col md={1} mdOffset={2}>
                  <Button
                    onClick={() => this.toggleAddNewBuilding()}
                  >Dodaj zgradu</Button>
                </Col>
                <Col md={1} mdOffset={1}>
                  <Button
                    onClick={() => this.toggleUpdateBuildingClicked()}
                  >Obriši zgradu</Button>
                </Col>
              </Row>
            </Col>
          </div>
          <AddNewBuilding
            addNewBuildingClicked={this.state.addNewBuildingClicked}
            toggleAddNewBuilding={this.toggleAddNewBuilding}
            buildingNameValidation={this.state.buildingAddressValidation}
            handleChangeAddress={this.handleChangeAddress}
            handleSubmitNewBuilding={this.handleSubmitNewBuilding}
            addressAlreadyExists={this.state.addressAlreadyExists}
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
    addNewBuilding: building => dispatch(addNewBuilding(building)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBuildingsView);
