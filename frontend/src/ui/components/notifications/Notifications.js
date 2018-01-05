import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import styles from './notifications.css';
import fetchUserNotificationsForUser from "../../../actionCreators/userNotificationsActionCreators";
import fetchUserData from "../../../actionCreators/userDataActionCreators";

class Notifications extends Component {

  componentDidMount() {
    this.props.fetchUserNotificationsForUser();
  }

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavDropdown title = {<span class="glyphicon glyphicon-bell" />} pullRight id='nav-dropdown2'>
          {
            this.props.userNotifications
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

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
