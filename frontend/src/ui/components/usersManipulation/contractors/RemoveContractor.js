import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, editUserInfo } from '../../../../actionCreators/usersActionCreators';
import { FormGroup, ControlLabel, FormControl, Button, Col, Modal, Row, ListGroup, ListGroupItem, Alert} from 'react-bootstrap';
import { CONTRACTOR } from "../../../../constants/values";

class RemoveContractor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelected: null,

      user: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
      },
    };

    this.handleChangeUser = this.handleChangeUser.bind(this);
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
      if (this.props.users[i] !== null) {
        if (this.props.users[i].id == event.target.value)
          this.setState({
            user: {
              id: this.props.users[i].id,
              firstName: this.props.users[i].firstName,
              lastName: this.props.users[i].lastName,
              mail: this.props.users[i].mail,
            }
          });
      }
    }

    this.setState({
      userSelected: event.target.value,
      userSelectedValidation: null,
    });
  };

  handleDelete = () => {
    this.props.deleteUser(this.state.user.id);
    this.props.toggleContractorInfoClicked();
    this.resetState();
  };

  render() {
    return (
      <div>
        <Modal
          show={this.props.updateContractorInfoClicked}
          onHide={() => {
            this.props.toggleContractorInfoClicked();
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši izvođača</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi izvođača</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeUser}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.users
                    .filter(user => user !== null)
                    .filter(user => user.privilege === CONTRACTOR)
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
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Ime:</b> {this.state.user.firstName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Prezime:</b> {this.state.user.lastName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>E - Mail:</b> {this.state.user.mail}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                  <Row>
                    <Col mdOffset={1} md={3}>
                      <Button onClick={() => this.handleDelete()}>Obriši izviđača</Button>
                    </Col>
                    <Col md={4}>
                      <Button onClick={() => {
                        this.props.toggleContractorInfoClicked();
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
    userData: state.userData,
    users: state.users,
    buildingUsers: state.buildingUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: id => dispatch(deleteUser(id)),
    editUserInfo: user => dispatch(editUserInfo(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveContractor);

