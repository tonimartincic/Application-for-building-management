import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteUser, editUserInfo} from '../../../actionCreators/usersActionCreators';
import * as constants from '../../../constants/values';

class UpdateUserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userSelectedValidation: null,
      userSelected: null,
      user: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        privilege: null,
      },
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePrivilege = this.handleChangePrivilege.bind(this);
  }

  resetState = () => {
    this.setState({
      userSelectedValidation: null,
      userSelected: null,
      user: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        privilege: null,
      },
      userPrivilege: null,
    });
  };

  handleChangeUser = (event) => {
    for (let i = 0; i < this.props.users.length; ++i) {
      if (this.props.users[i].id == event.target.value)
        this.setState({
          user: {
            id: this.props.users[i].id,
            firstName: this.props.users[i].firstName,
            lastName: this.props.users[i].lastName,
            mail: this.props.users[i].mail,
            privilege: this.props.users[i].privilege,
        }});
    }
    this.setState({
      userSelected: event.target.value,
      userSelectedValidation: null,
    });
  };

  handleChangeFirstName = (event) => {
    debugger;
    const userTemp = this.state.user;
    userTemp.firstName = event.target.value;
    this.setState({
      user: userTemp,
    });
  };

  handleChangeLastName = (event) => {
    const userTemp = this.state.user;
    userTemp.lastName = event.target.value;
    this.setState({
      user: userTemp,
    });
  };

  handleChangeMail = (event) => {
    const userTemp = this.state.user;
    userTemp.mail = event.target.value;
    this.setState({
      user: userTemp,
    });
  };

  handleChangePrivilege = (event) => {
    this.setState({
      userPrivilege: event.target.value,
    });
  };

  handleSubmit() {
    const userTemp = this.state.user;
    userTemp.privilege = this.state.userPrivilege;
    this.setState({
      user: userTemp,
    });
    if(!this.checkFirstName() || !this.checkLastName() || !this.checkEmail() || !this.checkPrivilege()) {
      console.log("error");
    } else {
      this.props.editUserInfo(this.state.user);
      this.resetState();
      this.props.toggleUpdateUserInfo();
    }

  }

  checkFirstName() {
    if(this.state.user.firstName !== '' || this.state.user.firstName !== null)
      return true;
    return false;
  }

  checkLastName() {
    if(this.state.user.lastName !== '' || this.state.user.lastName !== null)
      return true;
    return false;
  }

  checkEmail() {
    if(this.state.user.mail === null || this.state.user.mail === '') {
      return false;
    }
    for(let i = 0 ; i < this.props.users.length; i = i + 1) {
      if (this.props.users[i].mail === this.state.user.mail && this.props.users[i].id !== this.state.user.id) {
        return false;
      }
    }
    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.user.mail)) {
      return false;
    }
    return true;
  }

  checkPrivilege() {
    if (this.state.user.privilege === '' || this.state.user.privilege === 'Odaberi' || this.state.user.privilege==='select') {
      return false;
    } else if (this.state.privilege === 'predstavnik' || this.state.privilege === 'upravitelj' ) {
      for(let i = 0 ; i < this.props.users.length; i = i + 1) {
        if (this.props.users[i].privilege === this.state.user.privilege) {
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
          show={this.props.updateUserInfoClicked}
          onHide={() => {
            this.props.toggleUpdateUserInfo();
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Ažuriraj podatke za korisnika</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi korisnika</ControlLabel>
            <FormGroup controlId="formControlsSelect" validationState={this.state.userSelectedValidation}>
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeUser}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.users
                    .map(userTemp => {
                      const fullName = userTemp.firstName + " " + userTemp.lastName + " - " + userTemp.mail;
                      return (
                        <option key={userTemp.id} value={userTemp.id}>
                          {fullName}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <Choose>
                <When
                  condition={this.state.userSelected !== null && this.state.userSelected !== 'select' && this.state.userSelected !== 'Odaberi'}>
                  <ListGroup>
                    <Row>
                      <Col md={2} mdOffset={1}>
                        <p>Ime: </p>
                      </Col>
                      <Col md={6}>
                        <FormControl
                          type="text"
                          value={this.state.user.firstName}
                          placeholder={this.state.user.firstName}
                          onChange={this.handleChangeFirstName}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} mdOffset={1}>
                        <p>Prezime: </p>
                      </Col>
                      <Col md={6}>
                        <FormControl
                          type="text"
                          value={this.state.user.lastName}
                          placeholder={this.state.user.lastName}
                          onChange={this.handleChangeLastName}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} mdOffset={1}>
                        <p>E - Mail: </p>
                      </Col>
                      <Col md={6}>
                        <FormControl
                          type="text"
                          value={this.state.user.mail}
                          placeholder={this.state.user.mail}
                          onChange={this.handleChangeMail}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} mdOffset={1}>
                        <p>Privilegija: </p>
                      </Col>
                      <Col md={6}>
                        <FormControl componentClass="select" placeholder="select"
                                     onChange={this.handleChangePrivilege}>
                          {
                            constants.userPrivileges
                              .filter(privilege => privilege === this.state.user.privilege)
                              .map(privilege =>
                                <option value={privilege}>{privilege}</option>)
                          }                          {
                          constants.userPrivileges
                            .filter(privilege => privilege !== this.state.user.privilege)
                            .map(privilege =>
                              <option value={privilege}>{privilege}</option>)
                        }
                        </FormControl>
                      </Col>
                    </Row>
                  </ListGroup>
                  <Row>
                    <Col mdOffset={1} md={3}>
                      <Button onClick={() => this.handleSubmit()}>Promijeni podatke</Button>
                    </Col>
                    <Col mdOffset={1} md={3}>
                      <Button onClick={() => this.props.deleteUser(this.state.user.id)}>Obriši korisnika</Button>
                    </Col>
                    <Col md={4}>
                      <Button onClick={() =>
                      {this.props.toggleUpdateUserInfo();
                      this.resetState();}}>Odustani</Button>
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
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: (id) => (dispatch(deleteUser(id))),
    editUserInfo: (user) => (dispatch(editUserInfo(user))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserInfo);
