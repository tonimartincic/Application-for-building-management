import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Collapse} from 'react-bootstrap';
import {setEditAnnouncementButtonClicked} from '../../../actions/announcementsActions';
import {editAnnouncement} from '../../../actionCreators/announcementsActionCreators';
import styles from './editAnnouncementForm.css';

class EditAnnouncementForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = ({
      content: this.props.announcement.content
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const content = this.state.content;

    const announcement = {
      id: this.props.announcement.id,
      content: content
    };
    let hasError = false;

    if(this.state.content === null || this.state.content.trim() === '') {
      this.setState({
        contentValidation : 'error',
      });

      hasError = true;
        }

    if(!hasError){
      this.props.editAnnouncement(announcement);
      this.props.setEditAnnouncementButtonClicked(this.props.announcement.id, false);
      }
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  handleCancel = (event) => {
    event.preventDefault();
    this.props.setEditAnnouncementButtonClicked(this.props.announcement.id, false);
  }

  render() {
    return (
      <section className={styles.section}>
        <form onSubmit={this.handleSubmit}>
          <textarea
            validationState = {this.state.contentValidation}
            className={styles.textArea}
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <section>
            <Collapse in={this.state.contentValidation === 'error'}>
              <p className={styles.pInvalid}>Objava ne smije biti prazna.</p>
            </Collapse>
          </section>
          <section className={styles.sectionButtons}>
            <Button className={styles.button} type='submit'><span className='glyphicon glyphicon-ok' /></Button>
            <Button className={styles.button} type='button' onClick={this.handleCancel}><span className='glyphicon glyphicon-remove' /></Button>
          </section>
        </form>
      </section>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setEditAnnouncementButtonClicked: (id, value) => dispatch(setEditAnnouncementButtonClicked(id, value)),
    editAnnouncement: announcement => dispatch(editAnnouncement(announcement))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAnnouncementForm);
