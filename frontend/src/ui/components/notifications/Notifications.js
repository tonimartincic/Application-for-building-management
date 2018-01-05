import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import styles from './notifications.css';
import fetchUserNotificationsForUser from "../../../actionCreators/userNotificationsActionCreators";
import fetchUserData from "../../../actionCreators/userDataActionCreators";
import {readNotificationsForUser} from "../../../actionCreators/userNotificationsActionCreators";

class Notifications extends Component {

  componentDidMount() {
    this.props.fetchUserNotificationsForUser();
    this.checkForNotifications();
  }

  constructor(props) {
    super(props);
    this.state = {newNotifications:true};
  }

    checkForNotifications(){
      var noNewNotifications=true;

      for(let i = 0; i < this.props.userNotifications.length; i++) {
        if(this.props.userNotifications[i].read==false){
          noNewNotifications=false;
          break;
        }
      }
      if(!noNewNotifications){
        this.props.readNotificationsForUser();
        this.setState({newNotifications: true});
      }else{
        this.setState({newNotifications: false});
      }
    }

  render() {
  let bellColor = this.state.newNotifications ? "red" : "white"
    return (
      <div>
        <NavDropdown title = {<span class="glyphicon glyphicon-bell" style={{color: bellColor}} />} pullRight id='nav-dropdown2'
         onClick={() => this.checkForNotifications()}>
          {
            [...this.props.userNotifications]
              .reverse()
              .slice(0, 5)
              .map((notification, index) => {
                return (
                  <MenuItem key={index}>
                    <section className={styles.notification}>
                      {notification.description}
                    </section>
                  </MenuItem>
                 )}
              )
          }
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
