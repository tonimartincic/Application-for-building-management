import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Checkbox } from 'react-bootstrap';
import { toggleUserSettings } from "../../actions/userSettingsActions";
import { toggleReminderValue } from "../../actionCreators/userDataActionCreators";

class Settings extends Component {
  render (){
    return(
      <div>
        <Modal
          show={this.props.userSettingsClicked}
          onHide={() => this.props.toggleUserSettings(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Postavke</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col mdOffset={2}>
                <Checkbox
                  checked={this.props.userData.reminder}
                  onChange={() => this.props.toggleReminderValue()} >
                  Želim podsjetnike za naloge.
                </Checkbox>
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
    userSettingsClicked: state.userSettingsClicked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUserSettings: value => dispatch(toggleUserSettings(value)),
    toggleReminderValue: () => dispatch(toggleReminderValue())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
