import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from './userInfo.css';

class AllUsersInfoTable extends Component {
  render(){
    return(
      <div>
        <Table striped bordered condensed hover className={styles.myTable}>
          <thead>
            <tr>
              <th>Ime</th>
              <th>Prezime</th>
              <th>E - Mail</th>
              <th>Privilegija</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.buildings
              .filter(building => building.id == this.props.buildingId)
              .filter(building => building.manager !== null)
              .map((building, index) => <tr key={index}>
                  <td className={styles.tableColumn}>{building.manager.firstName}</td>
                  <td className={styles.tableColumn}>{building.manager.lastName}</td>
                  <td className={styles.tableColumn}>{building.manager.mail}</td>
                  <td className={styles.tableColumn}>{building.manager.privilege}</td>
                </tr>)
          }
          {
            this.props.buildingUsers
              .filter(user => user !== null)
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.tableColumn}>{user.firstName}</td>
                    <td className={styles.tableColumn}>{user.lastName}</td>
                    <td className={styles.tableColumn}>{user.mail}</td>
                    <td className={styles.tableColumn}>{user.privilege}</td>
                  </tr> )}
              )
          }
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buildings: state.buildings,
    userData : state.userData,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersInfoTable);
