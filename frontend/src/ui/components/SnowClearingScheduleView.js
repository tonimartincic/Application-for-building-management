import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col} from 'react-bootstrap';
import NavigationBar from "./NavigationBar";
import SnowClearingSchedule  from "./SnowClearingSchedule";
import fetchSnowClearingSchedules from '../../actionCreators/snowClearingSchedulesActionCreators';
import { generateSnowClearingSchedule } from '../../actionCreators/snowClearingSchedulesActionCreators';

class SnowClearingScheduleView extends Component {

  componentDidMount() {
    this.props.fetchSnowClearingSchedules();
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Choose>
          <When condition = {this.props.userData.privilege=="admin"}>
            <Button
              onClick={() => {
                this.props.generateSnowClearingSchedule("2017-05-17","2017-05-20");
                this.props.fetchSnowClearingSchedules();
                }
              }
            >Generate schedule</Button>
          </When>
        </Choose>
        <Col md={5} mdOffset={3}>
          <SnowClearingSchedule />
        </Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSnowClearingSchedules: () => dispatch(fetchSnowClearingSchedules()),
    generateSnowClearingSchedule: (from, to) => dispatch(generateSnowClearingSchedule(from, to)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SnowClearingScheduleView));
