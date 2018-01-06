import React from 'react';
import { Modal, Row, Col, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import {toggleUserInfo} from '../../../actions/userInfoActions';

class Preferences extends React.Component {
  render() {
    let tenantRepresentative = null;
    for(let i = 0; i < this.props.apartments.length; i++) {
      if(this.props.apartments[i].owner === null) {
        continue;
      }

      if(this.props.apartments[i].owner.privilege === 'TENANT_REPRESENTATIVE') {
        tenantRepresentative =
          <span>
            {
              " " + this.props.apartments[i].owner.firstName
              + " " + this.props.apartments[i].owner.lastName
              + " (" + this.props.apartments[i].owner.mail + ")"
            }
          </span>
      }
    }

    let tenants = [];
    for(let i = 0; i < this.props.apartments.length; i++) {
      if(this.props.apartments[i].owner === null) {
        continue;
      }

      if(this.props.apartments[i].owner.privilege === 'TENANT') {
        tenants[i] =
          <Row>
            <Col mdOffset={2}>
              <span>
                {
                  " " + this.props.apartments[i].owner.firstName
                  + " " + this.props.apartments[i].owner.lastName
                  + " (" + this.props.apartments[i].owner.mail + ")"
                }
              </span>
            </Col>
          </Row>;
      }
    }

    return (
      <div>
        <Modal show = {this.props.userInfoClicked}
                onHide={() => this.props.toggleUserInfo(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Well>
              <Row>
                <Col md={8} mdOffset={1}>
                  <h4>Ime:
                    {
                      ' ' + this.props.userData.firstName
                    }
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md={8} mdOffset={1}>
                  <h4>Prezime:
                    {
                      ' ' + this.props.userData.lastName
                    }
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md={8} mdOffset={1}>
                  <h4>Mail:
                    {
                      ' ' + this.props.userData.mail
                    }
                  </h4>
                </Col>
              </Row>
            </Well>
            <Well>
              <Row>
                <Col md={11} mdOffset={1}>
                  {
                    this.props.apartments
                      .filter(apartment => apartment.owner !== null)
                      .filter(apartment => apartment.owner.id === this.props.userData.id)
                      .map(apartment =>
                        <div>
                          <Row>
                            <Col>
                              <h4>Adresa zgrade:
                                {
                                  ' ' + apartment.building.address
                                }
                             </h4>
                            </Col>
                          </Row>
                          <Choose>
                            <When condition={apartment.building.manager !== null}>
                              <Row>
                                <Col>
                                  <h4>Upravitelj:
                                    {
                                      " "+apartment.building.manager.firstName
                                      + " "
                                      +apartment.building.manager.lastName
                                      +" (" + apartment.building.manager.mail + ")"
                                    }
                                  </h4>
                                </Col>
                              </Row>
                            </When>
                          </Choose>
                          <Choose>
                            <When condition={tenantRepresentative !== null}>
                              <Row>
                                <Col>
                                  <h4>Predstavnik stanara:
                                    { tenantRepresentative }
                                  </h4>
                                </Col>
                              </Row>
                            </When>
                          </Choose>
                          <Choose>
                            <When condition={tenants !== null}>
                              <Row>
                                <Col>
                                  <h4>Ostali stanari:
                                    { tenants }
                                  </h4>
                                </Col>
                              </Row>
                            </When>
                          </Choose>
                        </div>)
                  }

                </Col>
              </Row>
            </Well>
            <Well>
              <Row>
                <Col md={11} mdOffset={1}>
                  {
                    this.props.apartments
                      .filter(apartment => apartment.owner !== null)
                      .filter(apartment => apartment.owner.id === this.props.userData.id)
                      .map(apartment =>
                        <div>
                          <h4>Površina stana:  {apartment.area}</h4>
                        </div>)
                  }

                </Col>
              </Row>
            </Well>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    userInfoClicked: state.userInfoClicked,
    apartments: state.apartments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUserInfo: (value) => dispatch(toggleUserInfo(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
