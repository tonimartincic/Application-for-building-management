import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
//import {toggleUserNotification} from "../../../actions/userNotificationsActions";
import {withRouter} from 'react-router-dom';
import styles from './notifications.css';
import fetchUserNotifications from "../../../actionCreators/userNotificationsActionCreators";

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchUserNotifications();
  }
  constructor(props) {
    super(props);
  }
    //console.log(notifications);
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
    userNotifications: state.userNotifications,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserNotifications: () => dispatch(fetchUserNotifications()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
