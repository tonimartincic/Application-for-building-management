import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {toggleUserInfo} from '../../actions/userInfoActions';

class Preferences extends React.Component {

  render() {
    return (
      <div>
        <Modal show = {this.props.userInfoClicked}
                onHide={() => this.props.toggleUserInfo(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={8}>
                <h4>Ime:  {this.props.userData.firstName}</h4>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <h4>Prezime:  {this.props.userData.lastName}</h4>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <h4>Mail:  {this.props.userData.mail}</h4>
              </Col>
            </Row>
            <Row>
              <Col md={5} mdOffset={1}>

              </Col>
              <Col md={3}>

              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    userInfoClicked: state.userInfoClicked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUserInfo: (value) => dispatch(toggleUserInfo(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
