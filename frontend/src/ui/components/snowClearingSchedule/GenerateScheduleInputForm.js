import React from 'react';
import { Modal, Button, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { generateClicked } from '../../../actions/snowClearingSchedulesActions';
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateSnowClearingSchedule } from '../../../actionCreators/snowClearingSchedulesActionCreators';
import * as constants from '../../../constants/values';
import DatePicker from 'react-bootstrap-date-picker';

class GenerateScheduleInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const startDate = `${this.state.startDate.substring(0, 4)}-${this.state.startDate.substring(5, 7)}-${this.state.startDate.substring(8, 10)}`;
    const endDate = `${this.state.endDate.substring(0, 4)}-${this.state.endDate.substring(5, 7)}-${this.state.endDate.substring(8, 10)}`;

    this.props.generateSnowClearingSchedule(startDate, endDate);
    this.props.generateClicked();

    this.setState({
      startDate: null,
      endDate: null,
    });
  }

  onChangeStartDate = (value) => {
    this.setState({
      startDate: value
    });
  };

  onChangeEndDate = (value) => {
    this.setState({
      endDate: value
    });
  };

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
            <ControlLabel>Početni datum novog rasporeda čišćenja snijega:</ControlLabel>
            <DatePicker
              value={this.state.startDate}
              dateFormat='DD-MM-YYYY'
              weekStartsOn={1}
              dayLabels={constants.datePickerDayNames}
              monthLabels={constants.monthNames}
              onChange={this.onChangeStartDate}
            />
            <br/>
            <ControlLabel>Završni datum novog rasporeda čišćenja snijega:</ControlLabel>
            <DatePicker
              value={this.state.endDate}
              dateFormat='DD-MM-YYYY'
              weekStartsOn={1}
              dayLabels={constants.datePickerDayNames}
              monthLabels={constants.monthNames}
              onChange={this.onChangeEndDate}
            />
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
