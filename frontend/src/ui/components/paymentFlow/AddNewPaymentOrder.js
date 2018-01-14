import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addNewPaymentOrder } from "../../../actionCreators/paymentOrdersActionCreators";
import DatePicker from 'react-bootstrap-date-picker';
import styles from './addNewPaymentOrder.css';
import * as constants from '../../../constants/values';
import * as dateUtils from '../../../utils/DateUtil';
import { CONTRACTOR } from "../../../constants/values";

class AddNewPaymentOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
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
      payerIdValidation: null,
      receiverIdValidation: null,
    });
  };

  handleSubmit() {
    let hasError = false;

    var reg = /^[1-9]\d*(\.\d{1,2})?$/;
    if(this.state.amount === null || this.state.amount === ''|| !reg.test(this.state.amount)) {
      this.setState({
        amountValidation: 'error',
      });

      hasError = true;
    }

    if(this.state.description === null || this.state.description.trim() === '') {
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

    let paymentDue = null;
    if(this.state.paymentDue !== null && this.state.paymentDue !== '') {
      paymentDue = dateUtils.constructDateFromDatePickerForBackend(this.state.paymentDue);
    }

    let dayOfPayment = null;
    if(this.state.dayOfPayment !== null && this.state.dayOfPayment !== '') {
      dayOfPayment = dateUtils.constructDateFromDatePickerForBackend(this.state.dayOfPayment);
    }

    if(!hasError) {
      const paymentOrder = {
        id: this.state.id,
        amount: this.state.amount.trim(),
        description: this.state.description,
        paymentDue,
        dayOfPayment,
        payerId: this.state.payerId,
        receiverId: this.state.receiverId,
      };

      this.props.addNewPaymentOrder(paymentOrder);

      this.props.toggleAddNewPaymentOrder();
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

  handleChangePaymentDue(value) {
    this.setState({
      paymentDue: value,
      paymentDueValidation: null,
    });
  }

  handleChangeDayOfPayment(value) {
    this.setState({
      dayOfPayment: value,
    });
  }

  handleChangePayerId(e) {
    this.setState({
      payerId: e.target.value,
      payerIdValidation: null,
    });
  }

  handleChangeReceiverId(e) {
    this.setState({
      receiverId: e.target.value,
      receiverIdValidation: null,
    });
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.addNewPaymentOrderClicked}
          onHide={() => {
            this.props.toggleAddNewPaymentOrder();
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novi nalog</Modal.Title>
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
                <ControlLabel>Platitelj</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  onChange={this.handleChangePayerId}
                >
                  <option value="select">Odaberi</option>
                  {
                    this.props.buildingUsers
                      .map(user => {
                        return (<option value={user.id}>{user.firstName} {user.lastName}</option>);
                      })
                  }
                  <Choose>
                    <When condition={this.props.userBuilding !== null}>
                       <option value={this.props.userBuilding.manager.id}>{this.props.userBuilding.manager.firstName} {this.props.userBuilding.manager.lastName}</option>
                    </When>
                  </Choose>
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
                    this.props.buildingUsers
                      .map(user => {
                        return (<option value={user.id}>{user.firstName} {user.lastName}</option>);
                      })
                  }
                  <Choose>
                    <When condition={this.props.userBuilding !== null}>
                      <option value={this.props.userBuilding.manager.id}>{this.props.userBuilding.manager.firstName} {this.props.userBuilding.manager.lastName}</option>
                    </When>
                  </Choose>
                  {
                    this.props.users
                      .filter(user => user.privilege === CONTRACTOR)
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
    users: state.users,
    buildingUsers: state.buildingUsers,
    userBuilding: state.userBuilding,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewPaymentOrder: (paymentOrder) => (dispatch(addNewPaymentOrder(paymentOrder))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPaymentOrder);

