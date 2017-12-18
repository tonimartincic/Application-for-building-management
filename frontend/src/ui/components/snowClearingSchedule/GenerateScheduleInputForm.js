import React from 'react';
import { Modal, MenuItem, DropdownButton, Row, Col, Checkbox, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { generateClicked } from '../../../actions/snowClearingSchedulesActions';
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateSnowClearingSchedule } from '../../../actionCreators/snowClearingSchedulesActionCreators';

class GenerateScheduleInputForm extends React.Component {

  render() {
    return (
      <div>
        <Modal
          show={this.props.generateSchedule}
          onHide={() => this.props.generateClicked()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Generiraj novi raspored</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=> this.props.generateSnowClearingSchedule("2017-06-17","2017-07-01")}>Potvrdi</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    generateSchedule: state.generateSchedule,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    generateClicked: () => dispatch(generateClicked()),
    fetchSnowClearingSchedules: () => dispatch(fetchSnowClearingSchedules()),
    generateSnowClearingSchedule: (from, to) => dispatch(generateSnowClearingSchedule(from, to)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateScheduleInputForm);
