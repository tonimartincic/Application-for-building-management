import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addNewCost } from "../../../actionCreators/costsActionCreators";
import * as styles from './addNewPaymentOrder.css';

class AddNewPaymentOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: null,
      description: null,
      paymentDue: null,
      dayOfPayment: null,
      payerId: null,
      receiverId: null,

      amountValidation: null,
      descriptionValidation: null,
      paymentDueValidation: null,
      dayOfPaymentValidation: null,
      payerIdValidation: null,
      receiverIdValidation: null,
    };

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
      amount: null,
      description: null,
      paymentDue: null,
      dayOfPayment: null,
      payerId: null,
      receiverId: null,

      amountValidation: null,
      descriptionValidation: null,
      paymentDueValidation: null,
      dayOfPaymentValidation: null,
      payerIdValidation: null,
      receiverIdValidation: null,
    });
  };

  handleSubmit() {
    let hasError = false;

    if(this.state.amount === null || this.state.amount === '') {
      this.setState({
        amountValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.description === null || this.state.description === '') {
      this.setState({
        descriptionValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.paymentDue === null || this.state.paymentDue === '') {
      this.setState({
        paymentDueValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.dayOfPayment === null || this.state.dayOfPayment === '') {
      this.setState({
        dayOfPaymentValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.payerId === null || this.state.payerId === '' ||
      this.state.payerId === 'select' || this.state.payerId === 'Odaberi') {

      this.setState({
        payerIdValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.receiverId === null || this.state.receiverId === '' ||
      this.state.receiverId === 'select' || this.state.receiverId === 'Odaberi') {

      this.setState({
        receiverIdValidation: 'error',
      });

      hasError = true;
    }

    if(!hasError) {
      this.props.addNewCost(
        this.state.amount,
        this.props.userData.id,
        this.state.description,
        this.state.isUrgent === 'Hitno',
        this.state.status,
      );

      this.props.toggleAddNewFutureCost();
      this.resetState();
    }
  }

  handleChangeAmount(e) {
    this.setState({
      amount: e.target.value,
      amountValidation: null,
    });
  }

  handleChangeDescription(e) {
    this.setState({
      description: e.target.value,
      descriptionValidation: null,
    });
  }

  handleChangeIsUrgent(e) {
    this.setState({
      isUrgent: e.target.value,
    });
  }

  handleChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.addNewFutureCostClicked}
          onHide={() => {
            this.props.toggleAddNewFutureCost();
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novi trošak</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
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
                controlId="isUrgentInput"
              >
                <ControlLabel>Hitnost</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  defaultValue="Nije hitno"
                  onChange={this.handleChangeIsUrgent}
                >
                  <option value="Hitno">Hitno</option>
                  <option value="Nije hitno">Nije hitno</option>
                </FormControl>
              </FormGroup>
              <FormGroup
                controlId="statusInput"
              >
                <ControlLabel>Status</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  defaultValue="Odabir ponude"
                  onChange={this.handleChangeStatus}
                >
                  <option value="Odabir ponude">Odabir ponude</option>
                  <option value="Plaćeno">Plaćeno</option>
                  <option value="Prikupljanje sredstava">Prikupljanje sredstava</option>
                  <option value="Sredstva skupljena">Sredstva skupljena</option>
                </FormControl>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleSubmit()} >Potvrdi</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewPaymentOrder: (amount, creatorId, description, urgent, status) => (dispatch(addNewCost(amount, creatorId, description, urgent, status))),
    fetchPaymentOrders: () => (dispatch(fetchPaymentOrders())),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPaymentOrder);

