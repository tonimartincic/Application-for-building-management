import React from 'react';
import {FormGroup, ControlLabel, FormControl, Well, Button, Col, Modal, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import { approveRequestChangeToggle } from '../../../actions/snowClearingSchedulesActions';
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateSnowClearingSchedule, approveChangeRequest } from '../../../actionCreators/snowClearingSchedulesActionCreators';
import * as dateUtils from '../../../utils/DateUtil';

class ApproveChangeRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstDate: '',
      firstDateUser: '',
      secondDate: '',
      secondDateUser: '',
      firstDateSelected: null,
      secondDateSelected: null,
      alertVisible1: false,
      alertVisible2: false,
    };
  }

  handleChangeFirstDate = (event) => {
    this.setState({
      firstDate: event.target.value.substring(0,10),
      firstDateUser: event.target.value.substring(11),
      firstDateSelected: null,
      alertVisible1: false,
      alertVisible2: false,
    });
  };
  handleChangeSecondDate = (event) => {
    this.setState({
      secondDate: event.target.value.substring(0,10),
      secondDateUser: event.target.value.substring(11),
      secondDateSelected: null,
      alertVisible1: false,
      alertVisible2: false,
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
        alertVisible1: true,
      });
    } else if (this.state.firstDateUser === this.state.secondDateUser){
      this.setState({
        alertVisible2: true,
      });
    } else {
      debugger;
      this.props.approveChangeRequest(this.state.firstDate, this.state.secondDate);

      this.setState({
        firstDate: '',
        secondDate: '',
        firstDateUser: '',
        secondDateUser: '',
        firstDateSelected: null,
        secondDateSelected: null,
      });
    }
  }

  handleAlertDismiss1 = () => {
    this.setState({ alertVisible1: false });
  }

  handleAlertDismiss2 = () => {
    this.setState({ alertVisible2: false });
  }

  render() {

    const snowClearingSchedulesWithoutPastDates = this.props.snowClearingSchedules.filter((date) => dateUtils.determinatePastDates(date))

    return (
      <div>
        <Modal
          show={this.props.approveChangeRequestClicked}
          onHide={() => {
            this.props.approveRequestChangeToggle();
            this.handleAlertDismiss2();
            this.handleAlertDismiss1();
            this.setState({
              firstDateSelected: null,
              secondDateSelected: null
            });
          }
          }
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
                    snowClearingSchedulesWithoutPastDates
                      .filter((date) => date.askChange)
                      .map(date => {
                        const currentDate = dateUtils.constructDateStringForBackend(date);
                        const currentDateTemp = currentDate + ' - ' + date.user.firstName + ' ' + date.user.lastName;
                        return(
                          <option key={currentDate} value={currentDateTemp}>
                            {currentDateTemp}
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
                  snowClearingSchedulesWithoutPastDates
                    .filter((date) => date.askChange)
                    .map(date => {
                      debugger;
                      const currentDate = dateUtils.constructDateStringForBackend(date);
                      const currentDateTemp = currentDate + ' - ' + date.user.firstName + ' ' + date.user.lastName;
                      return(
                        <option key={currentDate} value={currentDateTemp}>
                          {currentDateTemp}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <Choose>
              <When condition={this.state.alertVisible1}>
                <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss1()}>
                  <h4>Pogrešno uneseni željeni datumi izmjene</h4>
                  <p>Unijeli ste dva ista datuma za izmjenu. Za točan unos promijenite jedan od datuma.</p>
                </Alert>
              </When>
            </Choose>
            <Choose>
              <When condition={this.state.alertVisible2}>
                <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss2()}>
                  <h4>Pogrešno uneseni željeni datumi izmjene</h4>
                  <p>Unijeli ste datume za istog stanara. Za točan unos promijenite jedan od datuma.</p>
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
