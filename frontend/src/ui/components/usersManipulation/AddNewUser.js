import React from 'react';
import {FormGroup, ControlLabel, FormControl, Well, Button, Col, Modal, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import { approveRequestChangeToggle } from '../../../actions/snowClearingSchedulesActions';
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateSnowClearingSchedule, approveChangeRequest } from '../../../actionCreators/snowClearingSchedulesActionCreators';
import * as dateUtils from '../../../utils/DateUtil';

class AddNewUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  handleSubmit() {
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

function mapDispatchToProps() {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser);
