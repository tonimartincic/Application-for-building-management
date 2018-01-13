import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import fetchPaymentOrders from '../../../actionCreators/paymentOrdersActionCreators';
import { PAID, NOT_PAID } from "../../../constants/values";

class PaymentsTable extends Component {

  componentWillMount() {
    this.props.fetchPaymentOrders();
  }

  render(){
    return(
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Platitelj</th>
          <th>Primatelj</th>
          <th>Iznos</th>
          <th>Opis</th>
          <th>Datum dospijeća</th>
          <th>Dan plaćanja</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.paymentOrders
            .map((payment, index) => {
              const payer = payment.payer.firstName + " " + payment.payer.lastName;
              const receiver = payment.receiver.firstName + " " + payment.receiver.lastName;

              return (
                <tr key={index}>
                  <td>{payer}</td>
                  <td>{receiver}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.description}</td>
                  <td>{payment.paymentDue}</td>
                  <td>{payment.dayOfPayment}</td>
                  <td>{payment.status}</td>
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
    userData : state.userData,
    users: state.users,
    paymentOrders: state.paymentOrders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPaymentOrders: () => (dispatch(fetchPaymentOrders())),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsTable);
