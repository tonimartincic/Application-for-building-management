import React, {Component} from 'react';
import {Button, Col, Grid, Row, ControlLabel, Checkbox} from 'react-bootstrap';
import {connect} from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import dateformat from 'dateformat';
import styles from './announcementInputForm.css';
import * as constants from '../../../constants/values';
import * as dateUtil from '../../../utils/DateUtil';
import {addNewAnnouncement} from '../../../actionCreators/announcementsActionCreators';

class AnnouncementInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      expirationDate: null,
      announcementHasExpirationDate: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onChangeExpirationDate = this.onChangeExpirationDate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    debugger;
    this.props.addNewAnnouncement(
      this.props.userData.id,
      this.state.content,
      `${this.state.expirationDate.substring(8, 10)}-${this.state.expirationDate.substring(5, 7)}-${this.state.expirationDate.substring(0, 4)}`
    );

    this.setState({
      content: '',
      expirationDate: null,
      announcementHasExpirationDate: false
    });
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  handleDelete = () => {
    this.setState({
      content: '',
    });
  }

  handleChangeExpirationDateCheckbox = () => {
    this.setState({
      announcementHasExpirationDate: !this.state.announcementHasExpirationDate,
    });
  }

  onChangeExpirationDate = (value) => {
    this.setState({
     expirationDate: value
    });
  };

  render() {
    return (
      <Grid>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col md={8}>
              <section>
                <section className={styles.sectionHeader}>
                  <span>Nova objava:</span>
                </section>

                <textarea
                  className={styles.textarea}
                  type='text'
                  value={this.state.content}
                  onChange={this.handleChange}
                />
              </section>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <section className={styles.sectionButtons}>
                <section className={styles.sectionDatePickerCheckboxAndLabel}>
                  <ControlLabel
                    className={styles.controlLabelAnnouncementExpirationDate}
                  >Objava ima datum isteka:</ControlLabel>
                  <section className={styles.sectionCheckboxAnnouncementExpirationDate}>
                    <Checkbox
                      checked={this.state.announcementHasExpirationDate}
                      onChange={() => this.handleChangeExpirationDateCheckbox()}
                    />
                  </section>
                  <Choose>
                    <When condition={this.state.announcementHasExpirationDate}>
                      <section className={styles.sectionDatePicker}>
                        <DatePicker
                          value={this.state.expirationDate}
                          dateFormat='DD-MM-YYYY'
                          weekStartsOn={1}
                          dayLabels={constants.datePickerDayNames}
                          monthLabels={constants.monthNames}
                          onChange={this.onChangeExpirationDate}
                        />
                      </section>
                    </When>
                  </Choose>
                </section>
                <Button
                  className={styles.button}
                  bsStyle='primary'
                  type='submit'
                ><span>Objavi</span></Button>
                <Button
                  className={styles.button}
                  bsStyle='warning'
                  type='button'
                  onClick={this.handleDelete}
                ><span>Obriši</span></Button>
              </section>
            </Col>
          </Row>
        </form>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    announcements: state.announcements,
    userData: state.userData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewAnnouncement: (userId, content, expirationDate) => dispatch(addNewAnnouncement(userId, content, expirationDate))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementInputForm);
