import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import {connect} from 'react-redux';
import styles from './snowClearingSchedule.css';
import * as dateUtils from '../../../utils/DateUtil';
import * as sortUtils from '../../../utils/SortUtil';

class SnowClearingSchedule extends Component {

  render(){
    const snowClearingScheduleSorted = this.props.snowClearingSchedules.sort(sortUtils.sortSnowClearingScheduleByDate);
    const snowClearingScheduleSortedPastDates = snowClearingScheduleSorted.filter(date => !dateUtils.determinatePastDates(date));

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
            snowClearingScheduleSortedPastDates
              .map((date, index) => {
                return (
                  <tr className={styles.pastDates} key={index}>
                    <td className={styles.tableColumn}>{date.user.firstName}</td>
                    <td className={styles.tableColumn}>{date.user.lastName}</td>
                    <td className={styles.tableColumn}>{date.clearingDate}</td>
                  </tr> )}
              )
              .slice(snowClearingScheduleSortedPastDates.length - 2,  snowClearingScheduleSortedPastDates.length)
          }
          {
            snowClearingScheduleSorted
              .filter(date => dateUtils.determinatePastDates(date))
              .map((date, index) => {
                return (
                  <Choose>
                    <When condition={this.props.userData.id === date.user.id}>
                      <tr key={index}>
                        <td className={styles.tableColumnCurrentUser}>{date.user.firstName}</td>
                        <td className={styles.tableColumnCurrentUser}>{date.user.lastName}</td>
                        <td className={styles.tableColumnCurrentUser}>{date.clearingDate}</td>
                      </tr>
                    </When>
                    <Otherwise>
                      <tr key={index}>
                        <td className={styles.tableColumn}>{date.user.firstName}</td>
                        <td className={styles.tableColumn}>{date.user.lastName}</td>
                        <td className={styles.tableColumn}>{date.clearingDate}</td>
                      </tr>
                    </Otherwise>
                  </Choose>)}
                )
          }
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData : state.userData,
    snowClearingSchedules: state.snowClearingSchedules
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnowClearingSchedule);
