import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col, Row} from 'react-bootstrap';
import NavigationBar from "../NavigationBar";
import SnowClearingSchedule  from "./SnowClearingSchedule";
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateClicked, approveRequestChangeToggle } from '../../../actions/snowClearingSchedulesActions';
import GenerateScheduleInputForm from './GenerateScheduleInputForm';
import AskChangeForm from './AskChangeForm';
import ApproveChangeRequest from './ApproveChangeRequest';

class SnowClearingScheduleView extends Component {

  componentWillMount() {
    this.props.fetchSnowClearingSchedules();
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Col md={1} mdOffset={1}>
          <Row>
            <Choose>
              <When condition = {this.props.userData.privilege==="admin"}>
                <Button
                  onClick={() => {
                    this.props.generateClicked();
                  }
                  }
                >Generiraj raspored</Button>
                <Button onClick={() => this.props.approveRequestChangeToggle()}
                >Odobri izmjene</Button>
                <GenerateScheduleInputForm />
                <ApproveChangeRequest />
              </When>
            </Choose>
          </Row>
        </Col>
        <Col md={5} mdOffset={1}>
          <SnowClearingSchedule />
        </Col>
        <Col md={3}>
          <Row>
            <AskChangeForm />
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
    approveRequestChangeToggle: () => dispatch(approveRequestChangeToggle()),
    fetchSnowClearingSchedules: () => dispatch(fetchSnowClearingSchedules()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SnowClearingScheduleView));
