import React from 'react';
import {FormGroup, ControlLabel, FormControl, Well, Button, Col, Modal, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import { approveRequestChangeToggle } from '../../../actions/snowClearingSchedulesActions';
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateSnowClearingSchedule, approveChangeRequest } from '../../../actionCreators/snowClearingSchedulesActionCreators';
import * as utils from '../../../utils/DateUtil';

class ApproveChangeRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstDate: '',
      secondDate: '',
      firstDateSelected: null,
      secondDateSelected: null,
      alertVisible: false,
    };
  }

  handleChangeFirstDate = (event) => {
    this.setState({
      firstDate: event.target.value,
      firstDateSelected: null,
      alertVisible: false,
    });
  };
  handleChangeSecondDate = (event) => {
    this.setState({
      secondDate: event.target.value,
      secondDateSelected: null,
      alertVisible: false,
    });
  };

  handleSubmit() {
    if (this.state.firstDate==='' || this.state.firstDate==='select' || this.state.secondDate==='' || this.state.secondDate==='select') {
      if (this.state.firstDate==='' || this.state.firstDate==='select') {
        this.setState({
          firstDateSelected: 'error',
        });
      }
      if (this.state.secondDate==='' || this.state.secondDate==='select') {
        this.setState({
          secondDateSelected: 'error'
        });
      }
    } else if (this.state.firstDate === this.state.secondDate) {
      this.setState({
        alertVisible: true,
      });
    } else {
      this.props.approveChangeRequest(this.state.firstDate, this.state.secondDate);

      this.setState({
        firstDate: '',
        secondDate: '',
        firstDateSelected: null,
        secondDateSelected: null,
      });
      this.props.approveRequestChangeToggle();
    }
  }

  handleAlertDismiss = () => {
    this.setState({ alertVisible: false });
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.approveChangeRequestClicked}
          onHide={() => this.props.approveRequestChangeToggle()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Odobri izmjenu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ControlLabel>Odaberi prvi termin:</ControlLabel>
              <FormGroup controlId="formControlsSelect" validationState={this.state.firstDateSelected}>
                <FormControl
                  componentClass='select'
                  placeholder='Odaberi'
                  onChange={this.handleChangeFirstDate}
                >
                  <option value="select">Odaberi</option>
                  {
                    this.props.snowClearingSchedules
                      .filter((date) => !date.askChange)
                      .map(date => {
                        const currentDate = utils.constructDateStringForBackend(date.clearingDate.dayOfMonth,date.clearingDate.monthValue, date.clearingDate.year);
                        return(
                          <option key={currentDate} value={currentDate}>
                            {currentDate}
                          </option>)
                      })
                  }
                </FormControl>
              </FormGroup>
            <ControlLabel>Odaberi drugi termin:</ControlLabel>
            <FormGroup controlId="formControlsSelect" validationState={this.state.secondDateSelected}>
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSecondDate}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.snowClearingSchedules
                    .filter((date) => !date.askChange)
                    .map(date => {
                      const currentDate = utils.constructDateStringForBackend(date.clearingDate.dayOfMonth,date.clearingDate.monthValue, date.clearingDate.year);
                      return(
                        <option key={currentDate} value={currentDate}>
                          {currentDate}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <Choose>
              <When condition={this.state.alertVisible}>
                <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss()}>
                  <h4>Pogrešno uneseni željeni datumi izmjene</h4>
                  <p>Unijeli ste dva ista datuma za izmjenu. Za točan unos promijenite jedan od datuma.</p>
                </Alert>
              </When>
            </Choose>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleSubmit()} >Potvrdi</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    approveChangeRequestClicked: state.approveChangeRequestClicked,
    snowClearingSchedules: state.snowClearingSchedules,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    approveChangeRequest: (firstDate, secondDate) => dispatch(approveChangeRequest(firstDate, secondDate)),
    approveRequestChangeToggle: () => dispatch(approveRequestChangeToggle()),
    fetchSnowClearingSchedules: () => dispatch(fetchSnowClearingSchedules()),
    generateSnowClearingSchedule: (from, to) => dispatch(generateSnowClearingSchedule(from, to)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveChangeRequest);
