import React from 'react';
import { Modal, Button, ControlLabel, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as constants from '../../../constants/values';
import DatePicker from 'react-bootstrap-date-picker';
import * as dateUtils from '../../../utils/DateUtil';

class GeneratePaymentInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <Modal
          show={this.props.generatePaymentsClicked}
          onHide={() => this.props.toggleGeneratePaymentsClicked()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Generiraj nalog</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Potvrdi</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneratePaymentInputForm);
