import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import {connect} from 'react-redux';
import styles from './snowClearingSchedule.css';

class SnowClearingSchedule extends Component {
  render(){
    return(
      <Table striped bordered condensed hover className={styles.myTable}>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
          {
            this.props.snowClearingSchedules
              .map((date) => {
                const schedule
                  = date.clearingDate.dayOfMonth + '/' + date.clearingDate.monthValue + '/' + date.clearingDate.year;
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

