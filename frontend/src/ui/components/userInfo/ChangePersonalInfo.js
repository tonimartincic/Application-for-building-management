import React, { Component } from 'react';
import { Row, Col, Button, Collapse, FormControl, FormGroup, ListGroup, Well} from 'react-bootstrap';

class ChangePersonalInfo extends Component {
  render() {
    return(
      <Collapse in={this.props.updateUserInfoClicked}>
        <Well>
          <FormGroup controlId="formControlsSelect">
            <ListGroup>
              <Row>
                <Col md={2} mdOffset={1}>
                  <p>Ime: </p>
                </Col>
                <Col md={6}>
                  <FormControl
                    type="text"
                    value={this.props.currentUser.firstName}
                    placeholder={this.props.currentUser.firstName}
                    onChange={this.props.changeFirstName}
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
                    value={this.props.currentUser.lastName}
                    placeholder={this.props.currentUser.lastName}
                    onChange={this.props.lastNameChange}
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
                    value={this.props.currentUser.mail}
                    placeholder={this.props.currentUser.mail}
                    onChange={this.props.handleChangeMail}
                  />
                </Col>
              </Row>
            </ListGroup>
          </FormGroup>
          <Button onClick={() => this.props.handleSubmit()}>Potvrdi</Button>
        </Well>
      </Collapse>
    );
  }
}

export default ChangePersonalInfo;
