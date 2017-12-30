import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteUser} from '../../../actionCreators/usersActionCreators';
import * as constants from '../../../constants/values';

class UpdateUserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userSelectedValidation: null,
      userSelected: null,
      user: null,
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  handleChangeUser = (event) => {
    for (let i = 0; i < this.props.users.length; ++i) {
      if (this.props.users[i].id == event.target.value)
        this.setState({
          user: this.props.users[i],
        });
    }
    this.setState({
      userSelected: event.target.value,
      userSelectedValidation: null,
    });
  };

  render() {
    return (
      <div>
        <Modal
          show={this.props.updateUserInfoClicked}
          onHide={() => {
            this.props.toggleUpdateUserInfo();
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
                    .map(user => {
                      const fullName = user.firstName + " " + user.lastName + " - " + user.mail;
                      return (
                        <option key={user.id} value={user.id}>
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
                                     onChange={this.props.handleChangePrivilege}>
                          {
                            constants.userPrivileges
                              .filter(privilege => privilege === this.state.user.privilege)
                              .map(privilege =>
                                <option value={privilege}>{privilege}</option>)
                          }
                          {
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
                      <Button onClick={() => this.props.toggleUpdateUserInfo()}>Odustani</Button>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserInfo);
