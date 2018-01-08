import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './notifications.css';
import fetchUserNotificationsForUser from "../../../actionCreators/userNotificationsActionCreators";
import fetchUserData from "../../../actionCreators/userDataActionCreators";
import {readNotificationsForUser} from "../../../actionCreators/userNotificationsActionCreators";

class Notifications extends Component {

  componentDidMount() {
    this.props.fetchUserNotificationsForUser();
  }

  countUnreadNotifications(){
    let unreadNotificationsNumber = 0;

    for(let i = 0; i < this.props.userNotifications.length; i++) {
      if(this.props.userNotifications[i].read == false){
        unreadNotificationsNumber++;
      }
    }

    if(unreadNotificationsNumber != 0){
      return unreadNotificationsNumber;
    }
  }

  areThereUnreadNotifications() {
    for(let i = 0; i < this.props.userNotifications.length; i++) {
      if(this.props.userNotifications[i].read == false){
        return true;
      }
    }
    return false;
  }

  getColor(){
    if(this.areThereUnreadNotifications()) {
      return '#C30808';
    } else {
      return 'white';
    }
  }

  checkForNotifications() {
    if(this.areThereUnreadNotifications()) {
      this.props.readNotificationsForUser();
    }
  }

  render() {
    let bellColor = this.getColor();

    const notifications = [];
    const length = this.props.userNotifications.length<=7?this.props.userNotifications.length:7;

    for(let i = 0; i < length; i++) {
      notifications[i] =
        <MenuItem key={i}>
          <span
            onClick={() => this.checkForNotifications()}
            className={!this.props.userNotifications[this.props.userNotifications.length - 1 - i].read ? styles.notificationUnRead: styles.notificationRead}
          >
            {this.props.userNotifications[this.props.userNotifications.length- 1 - i].description}
            &nbsp;&nbsp;&nbsp;
            {this.props.userNotifications[this.props.userNotifications.length- 1 - i].creationDate}
          </span>
        </MenuItem>
    }
    return (
      <div>
        <NavDropdown
          title = {<span class="glyphicon glyphicon-bell"  style={{color: bellColor}}>{this.countUnreadNotifications()} </span>}
          pullRight id='nav-dropdown2'
        >
          { notifications }
        </NavDropdown>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    userNotifications: state.userNotifications,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserData: () => dispatch(fetchUserData()),
    fetchUserNotificationsForUser: () => dispatch(fetchUserNotificationsForUser()),
    readNotificationsForUser: () => dispatch(readNotificationsForUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
