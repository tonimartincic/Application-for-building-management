import React, {Component} from 'react';
import {Col, Row, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import styles from './announcement.css';
import ConfirmationMessage from './ConfirmationMessage';
import EditAnnouncementForm from './EditAnnouncementForm';
import {setEditAnnouncementButtonClicked} from '../../../actions/announcementsActions';
import {canEditAnnouncement} from '../../../constants/values';

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
    const announcement = this.props.announcement;
    const privilege = this.props.userData.privilege;
    const userId = this.props.userData.id;

    return (
      <section className={styles.sectionAnnouncement}>
        <ConfirmationMessage
          deleteAnnouncementButtonClicked={this.state.deleteAnnouncementButtonClicked}
          setValueOfDeleteAnnouncementButtonClicked={this.setValueOfDeleteAnnouncementButtonClicked}
          deleteAnnouncement={this.props.deleteAnnouncement}
        />
        <Choose>
          <When condition={canEditAnnouncement.indexOf(privilege) !== -1 || announcement.user.id === userId}>
            <Row>
              <section className={styles.sectionHeader}>
                <Button
                  className={styles.button}
                  bsSize="xsmall"
                  onClick={() => {
                    this.props.setEditAnnouncementButtonClicked(announcement.id, !announcement.editClicked);
                  }}
                >
                  <span className='glyphicon glyphicon-edit' />
                </Button>
                <Button
                  className={styles.button}
                  bsSize="xsmall"
                  onClick={() => {
                    this.setValueOfDeleteAnnouncementButtonClicked(true);
                  }}
                >
                  <span className='glyphicon glyphicon-trash' />
                </Button>
              </section>
            </Row>
          </When>
        </Choose>
        <Row>
          <Col md={12}>
            <Choose>
              <When condition={announcement.editClicked}>
                <EditAnnouncementForm
                  announcement={announcement}
                />
              </When>
              <Otherwise>
                <span>{announcement.content}</span>
              </Otherwise>
            </Choose>
          </Col>
        </Row>
        <section className={styles.sectionFooter}>
          <Row>
            <Col md={4}>
              <span>{announcement.user.firstName} {announcement.user.lastName}</span>
            </Col>
            <Col md={4} mdOffset={4}>
              <span className={styles.creationDateSpan}>{announcement.creationDate}</span>
            </Col>
          </Row>
        </section>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setEditAnnouncementButtonClicked: (id, value) => dispatch(setEditAnnouncementButtonClicked(id, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement);
