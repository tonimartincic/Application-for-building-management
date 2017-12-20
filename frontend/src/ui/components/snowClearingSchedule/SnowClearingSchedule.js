import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import {connect} from 'react-redux';
import styles from './snowClearingSchedule.css';
import * as dateUtils from '../../../utils/DateUtil';
import * as sortUtils from '../../../utils/SortUtil';

class SnowClearingSchedule extends Component {

  pastDates = (date) => {
    const currentDate = new Date();
    const dateTemp = dateUtils.createDateFromSnowClearingDate(date);
    return dateTemp >= currentDate;
  };

  render(){
    return(
      <Table striped bordered condensed hover className={styles.myTable}>
        <thead>
        <tr>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Datum</th>
        </tr>
        </thead>
        <tbody>
          {
            this.props.snowClearingSchedules
              .filter(date => !this.pastDates(date))
              .sort(sortUtils.sortSnowClearingScheduleByDate)
              .map((date) => {
                const schedule
                  = dateUtils.constructDateString(date.clearingDate.dayOfMonth,date.clearingDate.monthValue, date.clearingDate.year);
                return (
                  <tr className={styles.pastDates}>
                    <td className={styles.tableColumn}>{date.user.firstName}</td>
                    <td className={styles.tableColumn}>{date.user.lastName}</td>
                    <td className={styles.tableColumn}>{schedule}</td>
                  </tr> )}
              )
              .shift()
          }
          {
            this.props.snowClearingSchedules
              .filter(date => this.pastDates(date))
              .sort(sortUtils.sortSnowClearingScheduleByDate)
              .map((date) => {
                const schedule
                  = dateUtils.constructDateString(date.clearingDate.dayOfMonth,date.clearingDate.monthValue, date.clearingDate.year);
                return (
                  <tr>
                    <td className={styles.tableColumn}>{date.user.firstName}</td>
                    <td className={styles.tableColumn}>{date.user.lastName}</td>
                    <td className={styles.tableColumn}>{schedule}</td>
                  </tr> )}
                )
          }
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    snowClearingSchedules: state.snowClearingSchedules
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnowClearingSchedule);

