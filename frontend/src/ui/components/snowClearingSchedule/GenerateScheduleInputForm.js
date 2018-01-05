import React from 'react';
import { Modal, Button, ControlLabel, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { generateClicked } from '../../../actions/snowClearingSchedulesActions';
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateSnowClearingSchedule } from '../../../actionCreators/snowClearingSchedulesActionCreators';
import * as constants from '../../../constants/values';
import DatePicker from 'react-bootstrap-date-picker';
import * as dateUtils from '../../../utils/DateUtil';

class GenerateScheduleInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      alertVisible1: false,
      alertVisible2: false,
      startDateSelected: null,
      endDateSelected: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.startDate === null || this.state.endDate === null) {
      if (this.state.startDate === null) {
        this.setState({
          startDateSelected: true,
        });
      }
      if (this.state.endDate === null) {
        this.setState({
          endDateSelected: true,
        })
      }
    } else {
      const currentDate = new Date();
      const start = new Date(this.state.startDate.substring(0, 4), this.state.startDate.substring(5, 7) - 1, this.state.startDate.substring(8, 10));
      const end = new Date(this.state.endDate.substring(0, 4), this.state.endDate.substring(5, 7) - 1, this.state.endDate.substring(8, 10));

      if (start > end) {
        this.setState({
          alertVisible1: true,
        });
      } else if (end < currentDate) {
        this.setState({
          alertVisible2: true,
        });
      } else {
        let startDate;
        if (start < currentDate) {
          startDate = dateUtils.constructDateString(currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear());
        } else {
          startDate = `${this.state.startDate.substring(0, 4)}-${this.state.startDate.substring(5, 7)}-${this.state.startDate.substring(8, 10)}`;
        }
        const endDate = `${this.state.endDate.substring(0, 4)}-${this.state.endDate.substring(5, 7)}-${this.state.endDate.substring(8, 10)}`;

        this.props.generateSnowClearingSchedule(startDate, endDate);
        this.props.generateClicked();

        this.setState({
          startDate: null,
          endDate: null,
        });
      }
    }
  }

  onChangeStartDate = (value) => {
    this.setState({
      startDate: value,
      alertVisible1: false,
      alertVisible2: false,
      startDateSelected: false,
    });
  };

  onChangeEndDate = (value) => {
    this.setState({
      endDate: value,
      alertVisible1: false,
      alertVisible2: false,
      endDateSelected: false,
    });
  };

  handleAlertDismiss1 = () => {
    this.setState({ alertVisible1: false });
  }

  handleAlertDismiss2 = () => {
    this.setState({ alertVisible2: false });
  }

  handleAlertDismiss3 = () => {
    this.setState({
      startDateSelected: false,
      endDateSelected: false,
    });
  }

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
            <br/>
            <Choose>
              <When condition={this.state.alertVisible1}>
                <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss1()}>
                  <h4>Pogrešno uneseni željeni datumi generiranja rasporeda</h4>
                  <p>Početni datum generiranja rasporeda treba biti prije od završnog datuma generiranja rasporeda.</p>
                </Alert>
              </When>
            </Choose>
            <Choose>
              <When condition={this.state.alertVisible2}>
                <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss2()}>
                  <h4>Pogrešno uneseni željeni datumi generiranja rasporeda</h4>
                  <p>Željeni datumi generiranja rasporeda su već prošli. Odaberite datum u budućnosti.</p>
                </Alert>
              </When>
            </Choose>
            <Choose>
              <When condition={this.state.startDateSelected || this.state.endDateSelected}>
                <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss3()}>
                  <h4>Pogrešno uneseni željeni datumi generiranja rasporeda</h4>
                  <p>Oba datuma moraju biti odabrana kako bi se mogao generirati raspored čišćenja snijega.</p>
                </Alert>
              </When>
            </Choose>
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
