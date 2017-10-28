import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import fetchAnnouncements from '../../actionCreators/announcementsActionCreators';
import Announcement from "./Announcement";
import {Col, Grid, Row} from 'react-bootstrap';

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
                announcement={announcement}
              />
            ))}
          </Col>
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
