import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as styles from './userInfo.css';

class AddNewUser extends React.Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.addNewUserClicked}
          onHide={() => {
            this.props.toggleAddNewUser();
            this.props.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novog korisnika</Modal.Title>
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
              <FormGroup validationState={this.props.privilegeValidationAlreadyExists || this.props.privilegeValidationEmpty}>
                <ControlLabel>Odaberi privilegiju</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={this.props.handleChangePrivilege}>
                  <option value="select">Odaberi</option>
                  <option value="stanar">Stanar</option>
                  <option value="predstavnik">Predstavnik stanara</option>
                  <option value="upravitelj">Upravitelj</option>
                  <option value="administrator">Administrator</option>
                </FormControl>
                <Row>
                  <Col md={4}>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.props.privilegeValidationEmpty==='error'}>
                        <p className={styles.pInvalid}>Morate odabrati privilegiju.</p>
                      </Collapse>
                      <Collapse in={this.props.privilegeValidationAlreadyExists==='error'}>
                        <p className={styles.pInvalid}>Postoji korisnik s odabranom privilegijom (max. 1).</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser);
