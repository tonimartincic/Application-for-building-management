import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from './administratorsTable.css';
import {ADMINISTRATOR} from "../../../../constants/values";

const AdministratorsTable = props => (
      <div>
        <Row>
          <Col mdOffset={1} md={6}>
            <Table striped bordered condensed hover className={styles.myTable}>
              <thead>
              <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>E - Mail</th>
              </tr>
              </thead>
              <tbody>
              {
                props.users
                  .filter(user => user !== null)
                  .filter(user => user.privilege === ADMINISTRATOR)
                  .map((user, index) => {
                    return (
                      <tr key={index}>
                        <td className={styles.tableColumn}>{user.firstName}</td>
                        <td className={styles.tableColumn}>{user.lastName}</td>
                        <td className={styles.tableColumn}>{user.mail}</td>
                      </tr> )}
                  )
              }
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
)

function mapStateToProps(state) {
  return {
    userData : state.userData,
    users: state.users,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdministratorsTable);
