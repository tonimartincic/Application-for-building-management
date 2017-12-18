import React, {Component} from 'react';
import {Col, Row, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import styles from './announcement.css';
import ConfirmationMessage from './ConfirmationMessage';
import EditAnnouncementForm from './EditAnnouncementForm';
import {setEditAnnouncementButtonClicked} from '../../../actions/announcementsActions';

class Announcement extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      deleteAnnouncementButtonClicked: false,
    });
  }

  setValueOfDeleteAnnouncementButtonClicked = (value) => {
    this.setState(
      {
        deleteAnnouncementButtonClicked: value,
      },
    );
  }

  render() {
    return (
      <section className={styles.sectionAnnouncement}>
        <ConfirmationMessage
          deleteAnnouncementButtonClicked={this.state.deleteAnnouncementButtonClicked}
          setValueOfDeleteAnnouncementButtonClicked={this.setValueOfDeleteAnnouncementButtonClicked}
          deleteAnnouncement={this.props.deleteAnnouncement}
        />
        <Well>
          <Choose>
            <When condition={this.props.announcement.editClicked}>
              <EditAnnouncementForm
                announcement={this.props.announcement}
              />
            </When>
            <Otherwise>
              <Row>
                <section className={styles.sectionHeader}>
                  <Button onClick={() => {
                    this.props.setEditAnnouncementButtonClicked(this.props.announcement.id, true);
                  }}
                  >
                    <span className='glyphicon glyphicon-edit' />
                  </Button>
                  <Button onClick={() => {
                    this.setValueOfDeleteAnnouncementButtonClicked(true);
                  }}
                  >
                    <span className='glyphicon glyphicon-trash' />
                  </Button>
                </section>
              </Row>
              <Row>
                <Col md={12}>
                  <span>{this.props.announcement.content}</span>
                </Col>
              </Row>
              <section className={styles.sectionFooter}>
                <Row>
                  <Col md={4}>
                    <span>{this.props.announcement.user.firstName} {this.props.announcement.user.lastName}</span>
                  </Col>
                  <Col md={4} mdOffset={4}>
                    <span className={styles.creationDateSpan}>{this.props.creationDate}</span>
                  </Col>
                </Row>
              </section>
            </Otherwise>
          </Choose>
        </Well>
      </section>
    )
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setEditAnnouncementButtonClicked: (id, value) => dispatch(setEditAnnouncementButtonClicked(id, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement);
