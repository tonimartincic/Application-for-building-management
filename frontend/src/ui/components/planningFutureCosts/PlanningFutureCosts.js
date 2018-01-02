import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchFutureCosts from '../../../actionCreators/costsActionCreators';
import NavigationBar from "../NavigationBar";

class PlanningFutureCosts extends Component {
  componentDidMount() {
    this.props.fetchFutureCosts();
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Kreator</th>
                  <th>Iznos</th>
                  <th>Opis</th>
                  <th>Datum kreiranja</th>
                  <th>Hitnost</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.costs
                    .map((cost, index) => {
                      return (
                        <tr key={index}>
                          <td>{cost.creator.firstName + ' ' + cost.creator.lastName}</td>
                          <td>{cost.amount}</td>
                          <td>{cost.description}</td>
                          <td>{cost.createdOn}</td>
                          <td>{cost.isUrgent ? 'Hitno' : 'Nije hitno'}</td>
                          <td>{cost.status}</td>
                        </tr> )}
                    )
                }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    costs: state.costs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFutureCosts: () => dispatch(fetchFutureCosts()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlanningFutureCosts));
