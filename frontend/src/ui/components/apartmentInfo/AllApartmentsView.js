import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../navigationBar/NavigationBar';
import ApartmentTable from './ApartmentTable';
import AddNewApartment from './AddNewApartment';
import UpdateApartment from './UpdateApartment';
import {Col, Button, Row, PageHeader, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";
import {fetchUsers} from "../../../actionCreators/usersActionCreators";
import fetchApartments, {addNewApartment} from "../../../actionCreators/apartmentsActionCreators";

class AllApartmentsInfo extends Component {
  componentDidMount() {
    this.props.fetchBuildings();
  }

  constructor(props) {
    super(props);
    this.state = {
      addNewApartmentClicked: false,
      updateApartmentClicked: false,
      apartmentId: null,
      apartmentSelected: null,
      building: {
        id: null,
        address: null,
        landlord: null,
        manager: null,
        funds: null,
      },
      buildingSelected: null,
      apartmentAreaValidation: null,
      apartmentArea: null,
    };

    this.toggleAddNewApartment = this.toggleAddNewApartment.bind(this);
    this.toggleUpdateApartmentClicked = this.toggleUpdateApartmentClicked.bind(this);
    this.handleSubmitNewApartment = this.handleSubmitNewApartment.bind(this);
    this.handleChangeArea = this.handleChangeArea.bind(this);
  }

  toggleUpdateApartmentClicked() {
    const updateBuildingClickedTemp = this.state.updateApartmentClicked;
    this.setState({
      updateApartmentClicked: !updateBuildingClickedTemp,
    });
  }

  toggleAddNewApartment() {
    const addNewApartmentClickedTemp = this.state.addNewApartmentClicked;
    this.setState({
      addNewApartmentClicked: !addNewApartmentClickedTemp,
    });
    if (addNewApartmentClickedTemp === true) {
      this.resetApartmentViewState();
    }
  }

  handleSubmitNewApartment() {
    debugger;
    var reg = /^\s*[1-9]\d*(\.\d{1,2})?\s*$/;
    if(this.state.apartmentArea===null || this.state.apartmentArea===""|| !reg.test(this.state.apartmentArea)) {
      this.setState({
        apartmentAreaValidation: 'error',
      })
    } else {
      const apartment = {
        area: this.state.apartmentArea,
      };

      this.props.addNewApartment(apartment, this.state.buildingSelected);
    }
  }

  handleChangeArea(e) {
    this.setState({
      apartmentArea: e.target.value,
      apartmentAreaValidation: null,
    })
  }

  resetApartmentViewState() {
    this.setState({
      addNewApartmentClicked: false,
      updateApartmentClicked: false,
      apartmentId: null,
      apartmentSelected: null,
    })
  }

  handleChangeBuilding = (event) => {
    for (let i = 0; i < this.props.buildings.length; ++i) {
      if (this.props.buildings[i].id == event.target.value)
        this.setState({
          building: {
            id: this.props.buildings[i].id,
            address: this.props.buildings[i].address,
            landlord: this.props.buildings[i].landlord,
            manager: this.props.buildings[i].manager,
            funds: this.props.buildings[i].funds,
          }
        });
    }

    this.setState({
      buildingSelected: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <NavigationBar/>
        <Row>
          <Col md={8} mdOffset={2}>
            <PageHeader>Stanovi</PageHeader>
          </Col>
        </Row>
        <Col md={8} mdOffset={2}>
          <ControlLabel>Odaberi zgradu</ControlLabel>
          <FormGroup controlId="formControlsSelect">
            <FormControl
              componentClass='select'
              placeholder='Odaberi'
              onChange={this.handleChangeBuilding}
            >
              <option value="select">Odaberi</option>
              {
                this.props.buildings
                  .map(building => {
                    return (
                      <option key={building.id} value={building.id}>
                        {building.address}
                      </option>)
                  })
              }
            </FormControl>
          </FormGroup>
        </Col>
        <Row>
          <Col md={8} mdOffset={2}>
            <ApartmentTable
              buildingSelected={this.state.buildingSelected}
              apartments={this.props.apartments}/>
          </Col>
        </Row>
        <Choose>
          <When condition={this.state.buildingSelected !== null && this.state.buildingSelected !== 'select'}>
            <Row>
              <div>
                <Col md={8} mdOffset={3}>
                  <Row>
                    <Col md={1} mdOffset={2}>
                      <Button
                        onClick={() => this.toggleAddNewApartment()}
                      >Dodaj stan</Button>
                    </Col>
                    <Col md={1} mdOffset={1}>
                      <Button
                        onClick={() => this.toggleUpdateApartmentClicked()}
                      >Obriši stan</Button>
                    </Col>
                  </Row>
                </Col>
              </div>
              <AddNewApartment
                addNewApartmentClicked={this.state.addNewApartmentClicked}
                toggleAddNewApartment={this.toggleAddNewApartment}
                handleSubmitNewApartment={this.handleSubmitNewApartment}
                apartmentAreaValidation={this.state.apartmentAreaValidation}
                handleChangeArea={this.handleChangeArea}
              />
              <UpdateApartment
                updateApartmentClicked={this.state.updateApartmentClicked}
                toggleUpdateApartmentClicked={this.toggleUpdateApartmentClicked}
                buildingSelectedId={this.state.buildingSelected}
              />
            </Row>
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
    apartments: state.apartments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBuildings: () => dispatch(fetchBuildings()),
    fetchApartments: () => dispatch(fetchApartments()),
    fetchUsers: () => dispatch(fetchUsers()),
    addNewApartment: (apartment, id) => dispatch(addNewApartment(apartment,id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllApartmentsInfo);
