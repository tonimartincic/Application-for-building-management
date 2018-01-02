import React, {Component} from 'react';
import {Grid, Row, Col, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import fetchFutureCosts from '../../../actionCreators/costsActionCreators';
import NavigationBar from "../NavigationBar";
import CostInputForm from "./CostInputForm";
import Cost from "./Cost";

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
              {this.props.costs
                .map((cost, index) => (
                  <Cost
                    key={index}
                    cost={cost}
                  />
                ))}
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
