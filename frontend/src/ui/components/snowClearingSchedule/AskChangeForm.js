import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormGroup, ControlLabel, FormControl, Well, Button, Col} from 'react-bootstrap';
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { askChange } from '../../../actionCreators/snowClearingSchedulesActionCreators'
import * as utils from '../../../utils/DateUtil';
import * as styles from './snowClearingSchedule.css';

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
    } else {
      this.props.askChange(this.state.changeDate);

      this.setState({
        changeDate: '',
      });
    }
  };

  render() {
    return (
      <Well className={styles.wellInput}>
        <FormGroup controlId="formControlsSelect" >
          <ControlLabel>Zatraži promjenu rasporeda za datum</ControlLabel>
          <FormControl componentClass='select' placeholder='Odaberi' onChange={this.handleChange} className={styles.dropDownForm}>
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
          <Col mdOffset={9}>
            <Button bsStyle="primary" onClick={()=>this.handleSubmit()} className={styles.submitButton}>Potvrdi</Button>
          </Col>
        </FormGroup>
      </Well>
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
