import React from 'react';
import {Col, Row, Well} from 'react-bootstrap';
import styles from './announcement.css';

const Announcement = (props) => {
  return (
    <section className={styles.sectionAnnouncement}>
      <Well>
        <Row>
          <Col md={12}>
            <span>{props.content}</span>
          </Col>
        </Row>
        <section className={styles.sectionFooter}>
          <Row>
            <Col md={4}>
              <span>{props.firstName} {props.lastName}</span>
            </Col>
            <Col md={4} mdOffset={4}>
              <span className={styles.creationDateSpan}>{props.creationDate}</span>
            </Col>
          </Row>
        </section>
      </Well>
    </section>
  );
};

export default Announcement;
