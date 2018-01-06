import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './notifications.css';
import fetchUserNotificationsForUser from "../../../actionCreators/userNotificationsActionCreators";
import fetchUserData from "../../../actionCreators/userDataActionCreators";
import {readNotificationsForUser} from "../../../actionCreators/userNotificationsActionCreators";

class Notifications extends Component {

  constructor(props) {
      super(props);
      this.state = {unreadNotificationsNumber : this.countUnreadNotifications()};
    }
  componentDidMount() {
    this.props.fetchUserNotificationsForUser();
  }
  countUnreadNotifications(){
  var unreadNotificationsNumber=0;
   for(let i = 0; i < this.props.userNotifications.length; i++) {
     if(this.props.userNotifications[i].read == false){
        unreadNotificationsNumber++;
      }
   }
   if(unreadNotificationsNumber!=0){
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

    return (
      <div>
        <NavDropdown
          title = {<span class="glyphicon glyphicon-bell"  style={{color: bellColor}}>{this.countUnreadNotifications()} </span>}
          pullRight id='nav-dropdown2'
          onClick={() => this.checkForNotifications()}
        >
          {
            [...this.props.userNotifications]
              .reverse()
              .slice(0, 5)
              .map((notification, index) => {
                return (
                  <MenuItem key={index}>
                    <section className={index < this.state.unreadNotificationsNumber ? styles.notificationUnRead: styles.notificationRead}>
                      {notification.description}{index}
                    </section>
                  </MenuItem>
                 )}
              )
          }
        </NavDropdown>
      </div>
    );
  if(!areThereUnreadNotifications()){this.setState({unreadNotificationsNumber: 0});}

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
