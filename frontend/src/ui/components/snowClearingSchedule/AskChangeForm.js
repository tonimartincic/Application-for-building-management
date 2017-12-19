import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormGroup, ControlLabel, FormControl, MenuItem, Button} from 'react-bootstrap';
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { askChange } from '../../../actionCreators/snowClearingSchedulesActionCreators'
import * as utils from '../../../utils/DateUtil';

class AskChangeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      changeDate: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      changeDate: event.target.value,
    });
  };

  handleSubmit() {
    if(this.state.changeDate ==='' || this.state.changeDate==='Odaberi') {
      return;
    }
    this.props.askChange(this.state.changeDate);

    this.setState({
      changeDate: '',
    });
  };

  render() {
    return (
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass='select' placeholder='Odaberi' onChange={this.handleChange}>
          <option value="select">Odaberi</option>
          {
            this.props.snowClearingSchedules
              .filter((date) => date.user.id === this.props.userData.id && !date.askChange)
              .map(date => {
                const currentDate = utils.constructDateStringForBackend(date.clearingDate.dayOfMonth,date.clearingDate.monthValue, date.clearingDate.year);
                return(
                  <option key={currentDate} value={currentDate}>
                    {currentDate}
                  </option>)
            })
          }
        </FormControl>
        <Button onClick={()=>this.handleSubmit()}>Potvrdi</Button>
      </FormGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    snowClearingSchedules: state.snowClearingSchedules,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSnowClearingSchedules: () => dispatch(fetchSnowClearingSchedules()),
    askChange: (date) => dispatch(askChange(date)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AskChangeForm);
