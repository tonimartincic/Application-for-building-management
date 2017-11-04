import React, {Component} from 'react';
import {Col, Row, Well, Button} from 'react-bootstrap';
import styles from './announcement.css';
import ConfirmationMessage from './ConfirmationMessage';

class Announcement extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      editAnnouncementButtonClicked: false,
      deleteAnnouncementButtonClicked: false,
    });
  }

  setValueOfEditAnnouncementButtonClicked = (value) => {
    this.setState(
      {
        editAnnouncementButtonClicked: value,
      },
    );
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
            <When condition={this.state.editAnnouncementButtonClicked}>
              <EditAbsenceFormContainer />
            </When>
            <Otherwise>
              <Row>
                <section className={styles.sectionHeader}>
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
                  <span>{this.props.content}</span>
                </Col>
              </Row>
              <section className={styles.sectionFooter}>
                <Row>
                  <Col md={4}>
                    <span>{this.props.firstName} {this.props.lastName}</span>
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

export default Announcement;
