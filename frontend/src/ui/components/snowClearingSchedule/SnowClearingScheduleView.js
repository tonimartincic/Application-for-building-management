import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col, Row} from 'react-bootstrap';
import NavigationBar from "../NavigationBar";
import SnowClearingSchedule  from "./SnowClearingSchedule";
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateClicked } from '../../../actions/snowClearingSchedulesActions';
import GenerateScheduleInputForm from './GenerateScheduleInputForm';

class SnowClearingScheduleView extends Component {

  componentWillMount() {
    this.props.fetchSnowClearingSchedules();
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Col md={5} mdOffset={3}>
          <SnowClearingSchedule />
        </Col>
        <Col md={3}>
          <Row>
            <Choose>
              <When condition = {this.props.userData.privilege=="admin"}>
                <Button
                  onClick={() => {
                    this.props.generateClicked();
                  }
                  }
                >Generiraj raspored</Button>
                <GenerateScheduleInputForm />
              </When>
            </Choose>
          </Row>
          <Row>
            <Button>Traži izmjenu</Button>
          </Row>
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
    generateClicked: () => dispatch(generateClicked()),
    fetchSnowClearingSchedules: () => dispatch(fetchSnowClearingSchedules()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SnowClearingScheduleView));
