import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Grid, Row } from 'react-bootstrap';
import fetchAnnouncements from '../../../actionCreators/announcementsActionCreators';
import { deleteAnnouncement } from '../../../actionCreators/announcementsActionCreators';
import Announcement from "./Announcement";
import AnnouncementInputForm from "./AnnouncementInputForm";
import * as sortUtils from '../../../utils/SortUtil';
import NavigationBar from "../navigationBar/NavigationBar";

class AnnouncementBoard extends Component {
  componentDidMount() {
    this.props.fetchAnnouncements();
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <AnnouncementInputForm/>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              {this.props.announcements
                .sort(sortUtils.sortAnnouncementsByCreationDate)
                .map((announcement, index) => (
                <Announcement
                  key={index}
                  announcement={announcement}
                  deleteAnnouncement={() => this.props.deleteAnnouncement(announcement.id)}
                />
              ))}
            </Col>
          </Row>
        </Grid>
      </div>
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
    fetchAnnouncements: () => dispatch(fetchAnnouncements()),
    deleteAnnouncement: id => dispatch(deleteAnnouncement(id))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnouncementBoard));
