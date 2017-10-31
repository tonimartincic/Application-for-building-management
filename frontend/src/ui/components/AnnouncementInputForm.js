import React, {Component} from 'react';
import {Col, Grid, Row, Button, Well} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import styles from './announcementInputForm.css';
import * as constants from '../../constants/values';

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

  onChangeExpirationDate = (value) => {
    this.setState({
      expirationDate: value,
    });
  };


  handleSubmit(event) {
    event.preventDefault();

    this.props.setEditAbsenceButtonClicked(this.state.selectedAbsence.id, false);
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

                  <DatePicker
                    value={this.state.expirationDate}
                    dateFormat='DD-MM-YYYY'
                    weekStartsOn={1}
                    dayLabels={constants.datePickerDayNames}
                    monthLabels={constants.monthNames}
                    onChange={this.onChangeExpirationDate}
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

export default AnnouncementInputForm;

