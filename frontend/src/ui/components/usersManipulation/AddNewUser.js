import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addNewUser} from "../../../actionCreators/usersActionCreators";
import * as styles from './userInfo.css';

class AddNewUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      privilege: '',
      firstNameValidation: null,
      lastNameValidation: null,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEMail = this.handleChangeEMail.bind(this);
    this.handleChangePrivilege = this.handleChangePrivilege.bind(this);
  }


  handleSubmit() {
    if(this.state.firstName === null || this.state.firstName === '' ||
      this.state.lastName === null || this.state.lastName === '' || !this.checkEmail() || !this.checkPrivilege()) {
      if(this.state.firstName === null || this.state.firstName === '') {
        this.setState({
        firstNameValidation: 'error',
        });
      }
      if(this.state.lastName === null || this.state.lastName === '') {
        this.setState({
          lastNameValidation: 'error',
        });
      }
      this.checkPrivilege();
      this.checkEmail();
    } else {

      this.props.addNewUser(this.state.firstName, this.state.lastName, this.state.email, this.state.privilege);
      this.props.toggleAddNewUser();

      this.setState({
        firstName: null,
        lastName: null,
        email: null,
        privilege: '',
      });
    }
  }

  handleChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
      lastNameValidation: null,
    });
  }

  handleChangeEMail(e) {
    this.setState({
      email: e.target.value,
      emailValidationEmptyString: null,
      emailValidationAlreadyExists: null,
      emailValidationNotCorrectFormat: null,
    });
  }

  handleChangePrivilege(e) {
    this.setState({
      privilege: e.target.value,
      privilegeValidationEmpty: null,
      privilegeValidationAlreadyExists: null,
    });
  }

  checkEmail() {
    if(this.state.email === null || this.state.email === '') {
      this.setState({
        emailValidationEmptyString: 'error',
      });
      return false;
    }
    for(let i = 0 ; i < this.props.users.length; i = i + 1) {
      if (this.props.users[i].mail === this.state.email) {
        this.setState({
          emailValidationAlreadyExists: 'error',
        });
        return false;
      }
    }
    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.email)) {
      this.setState({
        emailValidationNotCorrectFormat: 'error',
      });
      return false;
    }
    return true;
  }

  checkPrivilege() {
    debugger;
    if (this.state.privilege === '' || this.state.privilege === 'Odaberi' || this.state.privilege==='select') {
      this.setState({
        privilegeValidationEmpty: 'error',
      });
      return false;
    } else if (this.state.privilege === 'predstavnik' || this.state.privilege === 'upravitelj' ) {
      for(let i = 0 ; i < this.props.users.length; i = i + 1) {
        if (this.props.users[i].privilege === this.state.privilege) {
          this.setState({
            privilegeValidationAlreadyExists: 'error',
          });
          return false;
        }
      }
    }
    return true;
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.addNewUserClicked}
          onHide={() => {
            this.props.toggleAddNewUser();
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
                validationState={this.state.firstNameValidation}
              >
                <ControlLabel>Ime</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Unesi ime"
                  onChange={this.handleChangeFirstName}
                />
                <Row>
                  <Col md={4}>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.state.firstNameValidation==='error'}>
                        <p className={styles.pInvalid}>Morate unijeti ime.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup
                validationState={this.state.lastNameValidation}>
                <ControlLabel>Prezime</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Unesi prezime"
                  onChange={this.handleChangeLastName}
                />
                <Row>
                  <Col md={4}>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.state.lastNameValidation==='error'}>
                        <p className={styles.pInvalid}>Morate unijeti prezime.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup
                validationState={this.state.emailValidationAlreadyExists || this.state.emailValidationNotCorrectFormat || this.state.emailValidationEmptyString}>
                <ControlLabel>E - mail</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Unesi e - mail"
                  onChange={this.handleChangeEMail}
                />
                <Row>
                  <Col md={7}>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.state.emailValidationEmptyString==='error'}>
                        <p className={styles.pInvalid}>Morate unijeti e - mail adresu.</p>
                      </Collapse>
                      <Collapse in={this.state.emailValidationNotCorrectFormat==='error'}>
                        <p className={styles.pInvalid}>Format unesene e - mail adrese nije dobar.</p>
                      </Collapse>
                      <Collapse in={this.state.emailValidationAlreadyExists==='error'}>
                        <p className={styles.pInvalid}>Unesena e - mail adresa već postoji.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup validationState={this.state.privilegeValidationAlreadyExists || this.state.privilegeValidationEmpty}>
                <ControlLabel>Odaberi privilegiju</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={this.handleChangePrivilege}>
                  <option value="select">Odaberi</option>
                  <option value="stanar">Stanar</option>
                  <option value="predstavnik">Predstavnik stanara</option>
                  <option value="upravitelj">Upravitelj</option>
                  <option value="administrator">Administrator</option>
                </FormControl>
                <Row>
                  <Col md={4}>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.state.privilegeValidationEmpty==='error'}>
                        <p className={styles.pInvalid}>Morate odabrati privilegiju.</p>
                      </Collapse>
                      <Collapse in={this.state.privilegeValidationAlreadyExists==='error'}>
                        <p className={styles.pInvalid}>Postoji korisnik s odabranom privilegijom (max. 1).</p>
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
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (firstName, lastName, eMail, privilege) => (dispatch(addNewUser(firstName, lastName, eMail, privilege))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser);
