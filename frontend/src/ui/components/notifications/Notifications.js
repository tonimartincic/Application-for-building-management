import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
//import {toggleUserNotification} from "../../../actions/userNotificationsActions";
import {withRouter} from 'react-router-dom';

class Notifications extends Component {

  render() {
    return (
      <div>
        <NavDropdown title = "Notifikacije" id='nav-dropdown2'>//<span class="glyphicon glyphicon-bell"/>
          <MenuItem >
             Notif1
          </MenuItem>
          <MenuItem divider />
            <MenuItem >
              Notif2
            </MenuItem>
          <MenuItem divider />
          <MenuItem >
             Notif3
          </MenuItem>
        </NavDropdown>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    //userData: state.userData,
    //userSettingsClicked: state.userSettingsClicked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //toggleUserSettings: value => dispatch(toggleUserSettings(value)),
    //toggleReminderValue: () => dispatch(toggleReminderValue())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
