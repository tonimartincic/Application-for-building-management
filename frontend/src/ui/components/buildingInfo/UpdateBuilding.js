import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, ControlLabel, FormControl, Button, Col, Modal, Row, ListGroup, Alert, Well} from 'react-bootstrap';
import {deleteBuildingById} from '../../../actionCreators/buildingsActionCreators';

class UpdateBuilding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      building: {
        id: null,
        address: null,
        landlord: null,
        manager: null,
        funds: null,
      },
      buildingSelected: null,
    };

    this.handleChangeBuilding = this.handleChangeBuilding.bind(this);
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

  resetUpdateBuildingState() {
    this.setState({
      building: {
        id: null,
        address: null,
        landlord: null,
        manager: null,
        funds: null,
      },
      buildingSelected: null,
    });
  }

  handleDeleteBuilding() {
    if(this.state.buildingSelected) {
      this.props.deleteBuildingById(this.state.building.id);
    }

    this.props.toggleUpdateBuildingClicked();
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.updateBuildingClicked}
          onHide={() => {
            this.props.toggleUpdateBuildingClicked();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši zgradu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
            <Choose>
              <When condition={this.state.buildingSelected !== null || this.state.buildingSelected !== 'select'}>
                {
                  this.props.buildings
                    .filter(building => building.id == this.state.buildingSelected)
                    .map(building =>
                      <Well>
                        <Row>
                          <Col md={8} mdOffset={1}>
                            <h4>Adresa:
                              {
                                ' ' + building.address
                              }
                            </h4>
                          </Col>
                        </Row>
                        <Choose>
                          <When condition={building.landlord !== null}>
                            <Row>
                              <Col md={8} mdOffset={1}>
                                <h4>Predstavnik stanara:
                                  {
                                    ' ' + building.landlord.mail
                                  }
                                </h4>
                              </Col>
                            </Row>
                          </When>
                        </Choose>
                        <Choose>
                          <When condition={building.manager !== null}>
                            <Row>
                              <Col md={8} mdOffset={1}>
                                <h4>Upravitelj:
                                  {
                                    ' ' + building.manager.mail
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
            <When condition={this.state.buildingSelected !== null && this.state.buildingSelected !== 'select'}>
              <Modal.Footer>
                <Button onClick={() => {
                  this.handleDeleteBuilding();
                  this.resetUpdateBuildingState();
                }}>Obriši zgradu</Button>
                <Button onClick={() => {
                  this.props.toggleUpdateBuildingClicked();
                  this.resetUpdateBuildingState();
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
    buildings: state.buildings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteBuildingById: id => dispatch(deleteBuildingById(id)),
    editUserInfo: user => dispatch(editUserInfo(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBuilding);
