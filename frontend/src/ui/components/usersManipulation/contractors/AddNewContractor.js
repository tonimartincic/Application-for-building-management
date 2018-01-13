import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as styles from './addNewContractor.css';

class AddNewContractor extends React.Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.addNewContractorClicked}
          onHide={() => {
            this.props.toggleNewContractorClicked();
            this.props.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novog izvođača</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.props.firstNameValidation}
              >
                <ControlLabel>Ime</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Unesi ime"
                  onChange={this.props.handleChangeFirstName}
                />
                <Row>
                  <Col md={4}>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.props.firstNameValidation==='error'}>
                        <p className={styles.pInvalid}>Morate unijeti ime.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup
                validationState={this.props.lastNameValidation}>
                <ControlLabel>Prezime</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Unesi prezime"
                  onChange={this.props.handleChangeLastName}
                />
                <Row>
                  <Col md={4}>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.props.lastNameValidation==='error'}>
                        <p className={styles.pInvalid}>Morate unijeti prezime.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup
                validationState={this.props.emailValidationAlreadyExists || this.props.emailValidationNotCorrectFormat || this.props.emailValidationEmptyString}>
                <ControlLabel>E - mail</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Unesi e - mail"
                  onChange={this.props.handleChangeEMail}
                />
                <Row>
                  <Col md={7}>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.props.emailValidationEmptyString==='error'}>
                        <p className={styles.pInvalid}>Morate unijeti e - mail adresu.</p>
                      </Collapse>
                      <Collapse in={this.props.emailValidationNotCorrectFormat==='error'}>
                        <p className={styles.pInvalid}>Format unesene e - mail adrese nije dobar.</p>
                      </Collapse>
                      <Collapse in={this.props.emailValidationAlreadyExists==='error'}>
                        <p className={styles.pInvalid}>Unesena e - mail adresa već postoji.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.handleSubmit()} >Potvrdi</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContractor);
