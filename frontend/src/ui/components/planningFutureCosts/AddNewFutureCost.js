import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addNewCost } from "../../../actionCreators/costsActionCreators";
import * as styles from './addNewFutureCost.css';

class AddNewFutureCost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: null,
      description: null,
      isUrgent: 'Nije hitno',
      status: 'Odabir ponude',
      amountValidation: null,
      descriptionValidation: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeIsUrgent = this.handleChangeIsUrgent.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

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

    if(!hasError) {
      this.props.addNewCost(
        this.state.amount,
        this.props.userData.id,
        this.state.description,
        this.state.isUrgent === 'Hitno',
        this.state.status,
      );

      this.props.toggleAddNewFutureCost();

      this.setState({
        amount: null,
        description: null,
        isUrgent: 'Nije hitno',
        status: 'Odabir ponude',
      });
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
          onHide={this.props.toggleAddNewFutureCost}
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
                    <section className={styles.sectionInvalid}>
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
                    <section className={styles.sectionInvalid}>
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
    addNewCost: (amount, creatorId, description, urgent, status) => (dispatch(addNewCost(amount, creatorId, description, urgent, status))),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewFutureCost);
