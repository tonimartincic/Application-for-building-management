import React from 'react';
import {connect} from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Row, ListGroup, Collapse} from 'react-bootstrap';
import { deleteCost, editCost } from '../../../actionCreators/costsActionCreators';
import * as styles from './updateFutureCost.css';

class UpdateFutureCost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      futureCostSelectedValidation: null,
      futureCostSelected: null,

      cost: {
        id: null,
        creatorId: null,
        amount: null,
        description: null,
        createdOn: null,
        urgent: null,
        status: null,
      },

      amountValidation: null,
      descriptionValidation: null,
    };

    this.handleChangeCost = this.handleChangeCost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeIsUrgent = this.handleChangeIsUrgent.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

  resetState = () => {
    this.setState({
      futureCostSelectedValidation: null,
      futureCostSelected: null,

      cost: {
        id: null,
        creatorId: null,
        amount: null,
        description: null,
        createdOn: null,
        urgent: null,
        status: null,
      },

      amountValidation: null,
      descriptionValidation: null,
    });
  };

  handleChangeCost = (event) => {
    const costs = this.props.costs;

    for (let i = 0; i < costs.length; ++i) {
      if (costs[i] !== null) {
        if (costs[i].id == event.target.value)
          this.setState({
            cost: {
              id: costs[i].id,
              creatorId: costs[i].creator.id,
              amount: costs[i].amount,
              description: costs[i].description,
              createdOn: costs[i].createdOn,
              urgent: costs[i].urgent ? 'Hitno' : 'Nije hitno',
              status: costs[i].status,
            }
          });
      }
    }

    this.setState({
      futureCostSelected: event.target.value,
      futureCostSelectedValidation: null,
    });
  };

  handleChangeAmount = (event) => {
    const costTemp = this.state.cost;
    costTemp.amount = event.target.value;

    this.setState({
      cost: costTemp,
      amountValidation: null,
    });
  };

  handleChangeDescription = (event) => {
    const costTemp = this.state.cost;
    costTemp.description = event.target.value;

    this.setState({
      cost: costTemp,
      descriptionValidation: null,
    });
  };

  handleChangeIsUrgent = (event) => {
    const costTemp = this.state.cost;
    costTemp.urgent = event.target.value;

    this.setState({
      cost: costTemp,
    });
  };

  handleChangeStatus = (event) => {
    const costTemp = this.state.cost;
    costTemp.status = event.target.value;

    this.setState({
      cost: costTemp,
    });
  };

  handleSubmit() {
    let hasError = false;

    if(this.state.cost.amount === null || this.state.cost.amount === '') {
      this.setState({
        amountValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.cost.description === null || this.state.cost.description === '') {
      this.setState({
        descriptionValidation: 'error',
      });

      hasError = true;
    }

    if(!hasError) {
      const cost = {
        id: this.state.cost.id,
        creatorId: this.state.cost.creatorId,
        amount: this.state.cost.amount,
        description: this.state.cost.description,
        createdOn: this.state.cost.createdOn,
        urgent: this.state.cost.urgent === 'Hitno',
        status: this.state.cost.status,
      }

      this.props.editCost(cost);

      this.props.toggleUpdateFutureCost();
      this.resetState();
    }
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.updateFutureCostClicked}
          onHide={() => {
            this.props.toggleUpdateFutureCost();
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Ažuriraj podatke za trošak</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi trošak</ControlLabel>
            <FormGroup
              controlId="formControlsSelectCost"
              validationState={this.state.futureCostSelectedValidation}>
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeCost}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.costs
                    .filter(cost => cost !== null)
                    .map(costTemp => {
                      const record = costTemp.description + " - " + costTemp.amount + " kn";
                      return (
                        <option key={costTemp.id} value={costTemp.id}>
                          {record}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <FormGroup
              controlId="formControlsSelect"
            >
              <Choose>
                <When
                  condition={
                    this.state.futureCostSelected !== null &&
                    this.state.futureCostSelected !== 'select' &&
                    this.state.futureCostSelected !== 'Odaberi'}
                >
                  <ListGroup>
                    <FormGroup
                      controlId="amountInput"
                      validationState={this.state.amountValidation}
                    >
                      <Row>
                        <Col md={2} mdOffset={1}>
                          <p>Iznos: </p>
                        </Col>
                        <Col md={6}>
                          <FormControl
                            type="text"
                            value={this.state.cost.amount}
                            placeholder={this.state.cost.amount}
                            onChange={this.handleChangeAmount}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} mdOffset={3}>
                          <section>
                            <Collapse in={this.state.amountValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti iznos.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      controlId="descriptionInput"
                      validationState={this.state.descriptionValidation}
                    >
                      <Row>
                        <Col md={2} mdOffset={1}>
                          <p>Opis: </p>
                        </Col>
                        <Col md={6}>
                          <FormControl
                            type="text"
                            value={this.state.cost.description}
                            placeholder={this.state.cost.description}
                            onChange={this.handleChangeDescription}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} mdOffset={3}>
                          <section>
                            <Collapse in={this.state.descriptionValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti opis.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      controlId="isUrgentInput"
                    >
                      <Row>
                        <Col md={2} mdOffset={1}>
                          <p>Hitnost: </p>
                        </Col>
                        <Col md={6}>
                          <FormControl
                            componentClass="select"
                            placeholder="select"
                            defaultValue={this.state.cost.urgent}
                            onChange={this.handleChangeIsUrgent}
                          >
                            <option value="Hitno">Hitno</option>
                            <option value="Nije hitno">Nije hitno</option>
                          </FormControl>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      controlId="statusInput"
                    >
                      <Row>
                        <Col md={2} mdOffset={1}>
                          <p>Status: </p>
                        </Col>
                        <Col md={6}>
                          <FormControl
                            componentClass="select"
                            placeholder="select"
                            defaultValue={this.state.cost.status}
                            onChange={this.handleChangeStatus}
                          >
                            <option value="Odabir ponude">Odabir ponude</option>
                            <option value="Plaćeno">Plaćeno</option>
                            <option value="Prikupljanje sredstava">Prikupljanje sredstava</option>
                            <option value="Sredstva skupljena">Sredstva skupljena</option>
                          </FormControl>
                        </Col>
                      </Row>
                    </FormGroup>
                  </ListGroup>
                  <Row>
                    <Col mdOffset={1} md={3}>
                      <Button onClick={() => this.handleSubmit()}>Promijeni podatke</Button>
                    </Col>
                    <Col mdOffset={1} md={3}>
                      <Button onClick={() => {
                        this.props.deleteCost(this.state.cost.id);
                        this.resetState();
                      }}>Obriši trošak</Button>
                    </Col>
                    <Col md={4}>
                      <Button onClick={() => {
                        this.props.toggleUpdateFutureCost();
                        this.resetState();
                      }}>Odustani</Button>
                    </Col>
                  </Row>
                </When>
              </Choose>
            </FormGroup>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    costs: state.costs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCost: (id) => (dispatch(deleteCost(id))),
    editCost: (cost) => (dispatch(editCost(cost))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFutureCost);
