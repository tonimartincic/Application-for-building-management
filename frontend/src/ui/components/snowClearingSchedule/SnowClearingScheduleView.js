import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col, Row, Well, ControlLabel} from 'react-bootstrap';
import NavigationBar from "../NavigationBar";
import SnowClearingSchedule  from "./SnowClearingSchedule";
import fetchSnowClearingSchedules from '../../../actionCreators/snowClearingSchedulesActionCreators';
import { generateClicked, approveRequestChangeToggle } from '../../../actions/snowClearingSchedulesActions';
import GenerateScheduleInputForm from './GenerateScheduleInputForm';
import AskChangeForm from './AskChangeForm';
import ApproveChangeRequest from './ApproveChangeRequest';
import * as styles from './snowClearingSchedule.css';

class SnowClearingScheduleView extends Component {

  componentWillMount() {
    this.props.fetchSnowClearingSchedules();
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Col md={5} mdOffset={2}>
          <SnowClearingSchedule />
        </Col>
        <Col md={3}>
          <Row>
            <AskChangeForm />
          </Row>
          <Choose>
            <When condition = {this.props.userData.privilege === 'Administrator'}>
              <Well className={styles.wellUpdate}>
                <Row>
                  <Col mdOffset={1}>
                    <ControlLabel>Ažuriraj raspored:</ControlLabel>
                  </Col>
                </Row>
                <Row>
                  <Col mdOffset={2}>
                    <Button
                      onClick={() => {
                        this.props.generateClicked();
                      }
                      }
                    >Generiraj raspored</Button>
                  </Col>
                </Row>
                <Row>
                  <Col mdOffset={2}>
                    <Button className={styles.updateScheduleButton} onClick={() => this.props.approveRequestChangeToggle()}
                    >Odobri izmjene</Button>
                  </Col>
                </Row>
              </Well>
              <GenerateScheduleInputForm />
              <ApproveChangeRequest />
            </When>
          </Choose>
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
