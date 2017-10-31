import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Col, Grid, Row} from 'react-bootstrap';
import fetchAnnouncements from '../../actionCreators/announcementsActionCreators';
import Announcement from "./Announcement";
import AnnouncementInputForm from "./AnnouncementInputForm";
import * as dateUtil from '../../utils/DateUtil';

class AnnouncementBoard extends Component {
  componentDidMount() {
    this.props.fetchAnnouncements();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            {this.props.announcements.map((announcement, index) => (
              <Announcement
                key={index}
                content={announcement.content}
                firstName={announcement.user.firstName}
                lastName={announcement.user.lastName}
                creationDate={dateUtil.constructDateString(
                  announcement.creationDate.dayOfMonth,
                  announcement.creationDate.monthValue,
                  announcement.creationDate.year
                )}
              />
            ))}
          </Col>
        </Row>
        <Row>
          <AnnouncementInputForm/>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    announcements: state.announcements
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAnnouncements: () => dispatch(fetchAnnouncements())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnouncementBoard));
