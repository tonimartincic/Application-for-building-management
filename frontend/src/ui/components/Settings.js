import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Modal, Row, Col, Checkbox } from 'react-bootstrap';
import {toggleUserSettings} from "../../actions/userSettingsActions";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sendMails: false,
    };
  }

  invertSendMailsFlag = () => {
    debugger;
    const sendMailsTemp = this.state.sendMails;
    this.setState(
      { sendMails: !sendMailsTemp },
    );
  };

  render (){
    return(
      <div>
        <Modal show = {this.props.userSettingsClicked}
               onHide={() => this.props.toggleUserSettings(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Postavke</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col mdOffset={2}>
                <Checkbox
                  checked={this.state.sendMails}
                  onChange={this.invertSendMailsFlag} >
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
    toggleUserSettings: (value) => dispatch(toggleUserSettings(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
