import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, ControlLabel, FormControl, Button, Col, Modal, Row, ListGroup, Alert, Well} from 'react-bootstrap';
import {deleteApartmentById} from '../../../actionCreators/apartmentsActionCreators';

class UpdateApartment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apartment: {
        id: null,
        building: null,
        owner: null,
        area: null,
      },
      apartmentSelected: null,
    };

    this.handleChangeApartment = this.handleChangeApartment.bind(this);
  }


  handleChangeApartment = (event) => {
    for (let i = 0; i < this.props.apartments.length; ++i) {
      if (this.props.apartments[i].id == event.target.value)
        this.setState({
          apartment: {
            id: this.props.apartments[i].id,
            building: this.props.apartments[i].building,
            owner: this.props.apartments[i].owner,
            area: this.props.apartments[i].area,
          }
        });
    }

    this.setState({
      apartmentSelected: event.target.value,
    });
  };

  resetUpdateApartmentState() {
    this.setState({
      apartment: {
        id: null,
        building: null,
        owner: null,
        area: null,
      },
      apartmentSelected: null,
    });
  }

  handleDeleteApartment() {
    if(this.state.apartmentSelected) {
      this.props.deleteApartmentById(this.state.apartment.id);
    }
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.updateApartmentClicked}
          onHide={() => {
            this.props.toggleUpdateApartmentClicked();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši stan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi stan</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeApartment}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.apartments
                    .filter(apartment => apartment.building.id == this.props.buildingSelectedId)
                    .map((apartment, index) => {
                      const owner = apartment.owner !== null ? apartment.owner.firstName + " " + apartment.owner.lastName : "";
                      let apartmentTemp;
                      if(owner !== "") {
                        apartmentTemp = index + 1 + '. Vlasnik: ' + owner + ', površina: ' + apartment.area;
                      } else {
                        apartmentTemp = index + 1 + '. nema vlasnika, površina: ' + apartment.area;
                      }
                      return (
                        <option key={apartment.id} value={apartment.id}>
                          {apartmentTemp}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <Choose>
              <When condition={this.state.apartmentSelected !== null || this.state.apartmentSelected !== 'select'}>
                {
                  this.props.apartments
                    .filter(apartment => apartment.id == this.state.apartmentSelected)
                    .map(apartment =>
                      <Well>
                        <Choose>
                          <When condition={apartment.owner !== null}>
                            <Row>
                              <Col md={8} mdOffset={1}>
                                <h4>Vlasnik stana:
                                  {
                                    ' ' + apartment.owner.mail
                                  }
                                </h4>
                              </Col>
                            </Row>
                          </When>
                        </Choose>
                      </Well>
                    )
                }
              </When>
            </Choose>
          </Modal.Body>
          <Choose>
            <When condition={this.state.apartmentSelected !== null && this.state.apartmentSelected !== 'select'}>
              <Modal.Footer>
                <Button onClick={() => {
                  this.handleDeleteApartment();
                  this.resetUpdateApartmentState();
                }}>Obriši stan</Button>
                <Button onClick={() => {
                  this.props.toggleUpdateBuildingClicked();
                  this.resetUpdateApartmentState();
                }}>Odustani</Button>
              </Modal.Footer>
            </When>
          </Choose>
        </Modal>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    apartments: state.apartments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteApartmentById: id => dispatch(deleteApartmentById(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateApartment);
