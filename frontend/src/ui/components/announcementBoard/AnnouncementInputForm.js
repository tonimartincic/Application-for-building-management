import React, {Component} from 'react';
import {Button, Col, Grid, Row, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import styles from './announcementInputForm.css';
import {addNewAnnouncement} from '../../../actionCreators/announcementsActionCreators';

class AnnouncementInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      expirationDate: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addNewAnnouncement(this.state.content, this.state.expirationDate);

    this.setState({
      content: '',
      expirationDate: null,
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

  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <Well>
              <section>
                <section className={styles.sectionHeader}>
                  <span>Nova objava:</span>
                </section>
                <form onSubmit={this.handleSubmit}>
                  <textarea
                    className={styles.textarea}
                    type='text'
                    value={this.state.content}
                    onChange={this.handleChange}
                  />

                  <section className={styles.sectionButtons}>
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
                </form>
              </section>
            </Well>
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
    addNewAnnouncement: (content, expirationDate) => dispatch(addNewAnnouncement(content, expirationDate))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementInputForm);
