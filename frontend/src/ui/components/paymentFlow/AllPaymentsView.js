import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col, Row, Well} from 'react-bootstrap';
import NavigationBar from "../navigationBar/NavigationBar";
import AddNewPaymentOrder from "./AddNewPaymentOrder";
import UpdatePaymentOrder from "./UpdatePaymentOrder";
import PaymentsTable from "./PaymentsTable";
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";
import { fetchUsers } from '../../../actionCreators/usersActionCreators';
import * as styles from './allPaymentsView.css';

class AllPaymentsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addNewPaymentOrderClicked: false,
      updatePaymentOrderClicked: false,
    };

    this.toggleAddNewPaymentOrder = this.toggleAddNewPaymentOrder.bind(this);
    this.toggleUpdatePaymentOrder = this.toggleUpdatePaymentOrder.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  toggleAddNewPaymentOrder() {
    const addNewPaymentOrderClickedTemp = this.state.addNewPaymentOrderClicked;
    this.setState({
      addNewPaymentOrderClicked: !addNewPaymentOrderClickedTemp,
    });
  }

  toggleUpdatePaymentOrder() {
    const updatePaymentOrderClickedTemp = this.state.updatePaymentOrderClicked;
    this.setState({
      updatePaymentOrderClicked: !updatePaymentOrderClickedTemp,
    });
  }

  render() {
    return (
      <section>
        <NavigationBar/>
        <section className={styles.sectionMain}>
          <Row>
            <Col md={8} mdOffset={2}>
              <section className={styles.sectionTable}>
                <PaymentsTable />
             </section>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <section className={styles.sectionButtons}>
                <Button
                  className={styles.button}
                  onClick={() => this.toggleAddNewPaymentOrder()}
                >Dodaj novi nalog</Button>

                <Button
                  className={styles.button}
                  onClick={() => this.toggleUpdatePaymentOrder()}
                >Ažuriraj podatke</Button>
              </section>
            </Col>
          </Row>
          <Row>
            <Col>
              <AddNewPaymentOrder
                addNewPaymentOrderClicked={this.state.addNewPaymentOrderClicked}
                toggleAddNewPaymentOrder={this.toggleAddNewPaymentOrder}
                paymentOrders={this.props.paymentOrders}/>
              <UpdatePaymentOrder
                updatePaymentOrderClicked={this.state.updatePaymentOrderClicked}
                toggleUpdatePaymentOrder={this.toggleUpdatePaymentOrder}
                paymentOrders={this.props.paymentOrders}/>
            </Col>
          </Row>
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    paymentOrders: state.paymentOrders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBuildings: () => (dispatch(fetchBuildings())),
    fetchUsers: () => (dispatch(fetchUsers())),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllPaymentsView));
