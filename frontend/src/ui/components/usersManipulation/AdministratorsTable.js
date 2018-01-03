import React, { Component } from 'react';
import { Table, PageHeader, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from './userInfo.css';

class AdministratorsTable extends Component {
  render(){
    return(
      <div>
        <Row>
          <Col mdOffset={1}>
            <PageHeader>Administratori</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col mdOffset={3} md={8}>
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
                this.props.users
                  .filter(user => user !== null)
                  .filter(user => user.privilege === 'ADMINISTRATOR' || user.privilege === 'Administrator')
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
    );
  }
}

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
