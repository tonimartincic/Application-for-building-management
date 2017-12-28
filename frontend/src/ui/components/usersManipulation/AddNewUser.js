import React from 'react';
import {FormGroup, ControlLabel, FormControl, Well, Button, Col, Modal, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addNewUser} from "../../../actionCreators/usersActionCreators";

class AddNewUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      privilege: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEMail = this.handleChangeEMail.bind(this);
    this.handleChangePrivilege = this.handleChangePrivilege.bind(this);

  }


  handleSubmit() {

    this.props.addNewUser(this.state.firstName, this.state.lastName, this.state.email, this.state.privilege);
    this.props.toggleAddNewUser();

    this.setState({
      firstName: null,
      lastName: null,
      email: null,
      privilege: null,
    });
  }


  handleChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  handleChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  handleChangeEMail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePrivilege(e) {
    this.setState({ privilege: e.target.value });
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
                validationState={null}
              >
                <ControlLabel>Ime</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Unesi ime"
                  onChange={this.handleChangeFirstName}
                />
                <br />
                <ControlLabel>Prezime</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Unesi prezime"
                  onChange={this.handleChangeLastName}
                />
                <br />
                <ControlLabel>E - mail</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Unesi e - mail"
                  onChange={this.handleChangeEMail}
                />
                <br />
                <ControlLabel>Odaberi privilegiju</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={this.handleChangePrivilege}>
                  <option value="select">Odaberi</option>
                  <option value="stanar">Stanar</option>
                  <option value="predstavnikStanara">Predstavnik stanara</option>
                  <option value="upravitelj">Upravitelj</option>
                  <option value="administrator">Administrator</option>
                </FormControl>
                <FormControl.Feedback />
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

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (firstName, lastName, eMail, privilege) => (dispatch(addNewUser(firstName, lastName, eMail, privilege))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser);
