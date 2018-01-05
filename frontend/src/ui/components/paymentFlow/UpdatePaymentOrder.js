import React from 'react';
import {connect} from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Row, ListGroup, Collapse} from 'react-bootstrap';
import { deletePaymentOrder, editPaymentOrder } from '../../../actionCreators/paymentOrdersActionCreators';
import * as styles from './updatePaymentOrder.css';

class UpdatePaymentOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentOrderSelectedValidation: null,
      paymentOrderSelected: null,

      paymentOrder: {
        id: null,
        amount: null,
        description: null,
        paymentDue: null,
        dayOfPayment: null,
        payerId: null,
        receiverId: null,
      },

      amountValidation: null,
      descriptionValidation: null,
      paymentDueValidation: null,
      dayOfPaymentValidation: null,
      payerIdValidation: null,
      receiverIdValidation: null,
    };

    this.handleChangePaymentOrder = this.handleChangePaymentOrder.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePaymentDue = this.handleChangePaymentDue.bind(this);
    this.handleChangeDayOfPayment = this.handleChangeDayOfPayment.bind(this);
    this.handleChangePayerId = this.handleChangePayerId.bind(this);
    this.handleChangeReceiverId = this.handleChangeReceiverId.bind(this);
  }

  resetState = () => {
    this.setState({
      paymentOrderSelectedValidation: null,
      paymentOrderSelected: null,

      paymentOrder: {
        id: null,
        amount: null,
        description: null,
        paymentDue: null,
        dayOfPayment: null,
        payerId: null,
        receiverId: null,
      },

      amountValidation: null,
      descriptionValidation: null,
      paymentDueValidation: null,
      dayOfPaymentValidation: null,
      payerIdValidation: null,
      receiverIdValidation: null,
    });
  };

  handleChangePaymentOrder = (event) => {
    const paymentOrders = this.props.paymentOrders;

    for (let i = 0; i < paymentOrders.length; ++i) {
      if (paymentOrders[i] !== null) {
        if (paymentOrders[i].id == event.target.value)
          this.setState({
            paymentOrder: {
              id: paymentOrders[i].id,
              amount: paymentOrders[i].amount,
              description: paymentOrders[i].description,
              paymentDue: paymentOrders[i].paymentDue,
              dayOfPayment: paymentOrders[i].dayOfPayment,
              payerId: paymentOrders[i].payerId,
              receiverId: paymentOrders[i].receiverId,
            }
          });
      }
    }

    this.setState({
      paymentOrderSelected: event.target.value,
      paymentOrderSelectedValidation: null,
    });
  };

  handleChangeAmount = (event) => {
    const paymentOrderTemp = this.state.paymentOrder;
    paymentOrderTemp.amount = event.target.value;

    this.setState({
      paymentOrder: paymentOrderTemp,
      amountValidation: null,
    });
  };

  handleChangeDescription = (event) => {
    const paymentOrderTemp = this.state.paymentOrder;
    paymentOrderTemp.description = event.target.value;

    this.setState({
      paymentOrder: paymentOrderTemp,
      descriptionValidation: null,
    });
  };

  handleChangePaymentDue = (value) => {
    const paymentOrderTemp = this.state.paymentOrder;
    paymentOrderTemp.paymentDue = value;

    this.setState({
      paymentOrder: paymentOrderTemp,
      paymentDueValidation: null,
    });
  };

  handleChangeDayOfPayment = (value) => {
    const paymentOrderTemp = this.state.paymentOrder;
    paymentOrderTemp.dayOfPayment = value;

    this.setState({
      paymentOrder: paymentOrderTemp,
    });
  };

  handleChangePayerId = (event) => {
    const paymentOrderTemp = this.state.paymentOrder;
    paymentOrderTemp.payerId = event.target.value;

    this.setState({
      paymentOrder: paymentOrderTemp,
      payerIdValidation: null,
    });
  };

  handleChangeReceiverId = (event) => {
    const paymentOrderTemp = this.state.paymentOrder;
    paymentOrderTemp.receiverId = event.target.value;

    this.setState({
      paymentOrder: paymentOrderTemp,
      receiverIdValidation: null,
    });
  };

  handleSubmit() {
    let hasError = false;

    if(this.state.paymentOrder.amount === null || this.state.paymentOrder.amount === '') {
      this.setState({
        amountValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.paymentOrder.description === null || this.state.paymentOrder.description === '') {
      this.setState({
        descriptionValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.paymentOrder.paymentDue === null || this.state.paymentOrder.paymentDue === '') {
      this.setState({
        paymentDueValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.paymentOrder.payerId === null || this.state.paymentOrder.payerId === '' ||
      this.state.paymentOrder.payerId === 'select' || this.state.paymentOrder.payerId === 'Odaberi') {

      this.setState({
        payerIdValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.paymentOrder.receiverId === null || this.state.paymentOrder.receiverId === '' ||
      this.state.paymentOrder.receiverId === 'select' || this.state.paymentOrder.receiverId === 'Odaberi') {

      this.setState({
        receiverIdValidation: 'error',
      });

      hasError = true;
    }

    if(!hasError) {
      const paymentOrder = {
        id: this.state.paymentOrder.id,
        amount: this.state.paymentOrder.amount,
        description: this.state.paymentOrder.description,
        paymentDue: this.state.paymentOrder.paymentDue,
        dayOfPayment: this.state.paymentOrder.dayOfPayment,
        payerId: this.state.paymentOrder.payerId,
        receiverId: this.state.paymentOrder.receiverId,
      };

      this.props.editPaymentOrder(paymentOrder);

      this.props.toggleUpdatePaymentOrder();
      this.resetState();
    }
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.updatePaymentOrderClicked}
          onHide={() => {
            this.props.toggleUpdatePaymentOrder();
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Ažuriraj podatke za nalog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi nalog</ControlLabel>
            <FormGroup
              controlId="formControlsSelectPaymentOrder"
              validationState={this.state.paymentOrderSelectedValidation}>
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangePaymentOrder}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.paymentOrders
                    .filter(paymentOrder => paymentOrder !== null)
                    .map(paymentOrderTemp => {
                      const record = "Id platitelja i primatelja (" + paymentOrderTemp.payerId + "," + paymentOrderTemp.receiverId + "), Nalog:"
                        + paymentOrderTemp.description + " - " + paymentOrderTemp.amount + " kn";
                      return (
                        <option key={paymentOrderTemp.id} value={paymentOrderTemp.id}>
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
                    this.state.paymentOrderSelected !== null &&
                    this.state.paymentOrderSelected !== 'select' &&
                    this.state.paymentOrderSelected !== 'Odaberi'}
                >
                  <ListGroup>
                    <FormGroup
                      controlId="amountInput"
                      validationState={this.state.amountValidation}
                    >
                      <ControlLabel>Iznos</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesi iznos"
                        onChange={this.handleChangeAmount}
                      />
                      <Row>
                        <Col md={4}>
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
                      <ControlLabel>Opis</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesi opis"
                        onChange={this.handleChangeDescription}
                      />
                      <Row>
                        <Col md={4}>
                          <section>
                            <Collapse in={this.state.descriptionValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti opis.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup
                      controlId="paymentDueInput"
                      validationState={this.state.paymentDueValidation}
                    >
                      <ControlLabel>Datum prispijeća</ControlLabel>
                      <DatePicker
                        value={this.state.paymentDue}
                        dateFormat='DD-MM-YYYY'
                        weekStartsOn={1}
                        dayLabels={constants.datePickerDayNames}
                        monthLabels={constants.monthNames}
                        onChange={this.handleChangePaymentDue}
                      />
                      <Row>
                        <Col md={8}>
                          <section>
                            <Collapse in={this.state.paymentDueValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti datum prispijeća.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup
                      controlId="dayOfPaymentInput"
                    >
                      <ControlLabel>Datum plaćanja</ControlLabel>
                      <DatePicker
                        value={this.state.dayOfPayment}
                        dateFormat='DD-MM-YYYY'
                        weekStartsOn={1}
                        dayLabels={constants.datePickerDayNames}
                        monthLabels={constants.monthNames}
                        onChange={this.handleChangeDayOfPayment}
                      />
                    </FormGroup>

                    <FormGroup
                      controlId="payerIdInput"
                      validationState={this.state.payerIdValidation}
                    >
                      <ControlLabel>Platitelja</ControlLabel>
                      <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChangePayerId}
                      >
                        <option value="select">Odaberi</option>
                        {
                          this.props.users
                            .map(user => {
                              return (<option value={user.id}>{user.firstName} {user.lastName}</option>);
                            })
                        }
                      </FormControl>
                      <Row>
                        <Col md={4}>
                          <section>
                            <Collapse in={this.state.payerIdValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati platitelja.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup
                      controlId="receiverIdInput"
                      validationState={this.state.receiverIdValidation}
                    >
                      <ControlLabel>Primatelj</ControlLabel>
                      <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChangeReceiverId}
                      >
                        <option value="select">Odaberi</option>
                        {
                          this.props.users
                            .map(user => {
                              return (<option value={user.id}>{user.firstName} {user.lastName}</option>);
                            })
                        }
                      </FormControl>
                      <Row>
                        <Col md={4}>
                          <section>
                            <Collapse in={this.state.receiverIdValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati primatelja.</p>
                            </Collapse>
                          </section>
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
                        this.props.deletePaymentOrder(this.state.paymentOrder.id);
                        this.resetState();
                      }}>Obriši nalog</Button>
                    </Col>
                    <Col md={4}>
                      <Button onClick={() => {
                        this.props.toggleUpdatePaymentOrder();
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
    paymentOrders: state.paymentOrders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deletePaymentOrder: (id) => (dispatch(deletePaymentOrder(id))),
    editPaymentOrder: (cost) => (dispatch(editPaymentOrder(cost))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePaymentOrder);
