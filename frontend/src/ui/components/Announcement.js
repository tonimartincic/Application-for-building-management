import React from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import styles from './announcement.css';

const Announcement = (props) => {
  return (
    <section className={styles.sectionAnnouncement}>
      <Row>
        <Col md={12}>
          <span>{props.announcement.content}</span>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <span>{props.announcement.user.firstName} {props.announcement.user.lastName}</span>
        </Col>
        <Col md={4}>
          <span>{props.announcement.creationDate.dayOfMonth}. {props.announcement.creationDate.month} {props.announcement.creationDate.year}</span>
        </Col>
        <Col md={4}>
          <Choose>
            <When condition={props.announcements ===  null}>
              {null}
            </When>
            <Otherwise>
              <span>{props.announcement.expirationDate.dayOfMonth}. {props.announcement.expirationDate.month} {props.announcement.expirationDate.year}</span>
            </Otherwise>
          </Choose>
        </Col>
      </Row>
    </section>
  );
};

export default Announcement;
