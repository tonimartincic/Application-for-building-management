import React from 'react';
import {connect} from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Row, ListGroup, Collapse} from 'react-bootstrap';
import { deleteCost, editCost } from '../../../actionCreators/costsActionCreators';
import { fetchUsers } from "../../../actionCreators/usersActionCreators";
import { fetchBuildingForCurrentUser } from "../../../actionCreators/buildingsActionCreators";
import { editBuildingFundsForUser } from "../../../actionCreators/buildingsActionCreators";
import { addNewPaymentOrder } from "../../../actionCreators/paymentOrdersActionCreators";
import { CONTRACTOR, PAID } from "../../../constants/values";
import * as dateUtils from '../../../utils/DateUtil';
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
        contractor: null
      },

      amountValidation: null,
      descriptionValidation: null,
      contractorValidation: null,
    };

    this.handleChangeCost = this.handleChangeCost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeIsUrgent = this.handleChangeIsUrgent.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeContractor = this.handleChangeContractor.bind(this);

  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchBuildingForCurrentUser();
  }

  resetState = () => {
    this.setState({
      futureCostSelectedValidation: null,
      futureCostSelected: null,
      contractor: null,

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
      contractorValidation: null,
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
  handleChangeContractor = (event) => {
      const costTemp = this.state.cost;
      costTemp.contractor = event.target.value;
      this.setState({
        contractor: costTemp.contractor,
        contractorValidation: null,
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

    if(this.state.contractor === null || this.state.contractor === '' ||
     this.state.contractor === 'select'|| this.state.contractor === 'Odaberi izvođača radova' ||
     typeof this.state.contractor === "undefined") {
      this.setState({
        contractorValidation: 'error',
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

      if(this.state.cost.status === 'Plaćeno'){
        var date = new Date().toJSON().slice(0,10);
        var dayOfPayment =  dateUtils.constructDateFromDatePickerForBackend(date);
        const paymentOrder = {
                amount: this.state.cost.amount,
                description: this.state.cost.description,
                paymentDue: dayOfPayment,
                dayOfPayment: dayOfPayment,
                payerId: this.props.userData.id,
                receiverId: parseInt(this.state.contractor),
                status:'Plaćeno',
                costId: this.state.cost.id
              };

        this.props.addNewPaymentOrder(paymentOrder);
        var id=this.state.cost.creatorId;
        this.props.editBuildingFundsForUser(-this.state.cost.amount,id);
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
                    .filter(cost => cost !== null && cost.status != PAID)
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
                  <Choose>
                   <When condition={this.state.cost.status === 'Plaćeno'}>
                    <FormGroup
                       controlId="chooseContractor"
                       validationState={this.state.contractorValidation}>
                       <Row>
                         <Col md={2} mdOffset={1}>
                             <p>Odabir izvođača: </p>
                         </Col>
                            <Col md={6}>
                              <FormControl
                                componentClass='select'
                                placeholder='select'
                                onChange={this.handleChangeContractor}
                               >
                                <option value="select">Odaberi izvođača radova</option>
                                {
                                  this.props.users
                                  .filter(user => user !== null)
                                  .filter(user => user.privilege === CONTRACTOR)
                                  .map((user, index) => {
                                    const record = user.firstName + " - " + user.lastName;
                                    return (
                                     <option value={user.id}>{record}</option>
                                    )}
                                  )
                                }
                              </FormControl>
                            </Col>

                      </Row>
                      <Row>
                        <Col md={4} mdOffset={3}>
                          <section>
                            <Collapse in={this.state.contractorValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati izvođača.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                   </When>
                  </Choose>
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
    userData: state.userData,
    users: state.users

  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserData: () => dispatch(fetchUserData()),
    deleteCost: (id) => (dispatch(deleteCost(id))),
    editCost: (cost) => (dispatch(editCost(cost))),
    fetchUsers: () => dispatch(fetchUsers()),
    addNewPaymentOrder: (paymentOrder) => dispatch(addNewPaymentOrder(paymentOrder)),
    fetchBuildingForCurrentUser: (id) => dispatch(fetchBuildingForCurrentUser(id)),
    editBuildingFundsForUser: (amount, id) => dispatch(editBuildingFundsForUser(amount, id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFutureCost);
