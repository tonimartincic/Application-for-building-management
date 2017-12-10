import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as styles from './navigationBar.css';
import UserInfoData from './UserInfoData';
import Settings from './Settings';
import {toggleUserInfo} from "../../actions/userInfoActions";
import {toggleUserSettings} from "../../actions/userSettingsActions";

class UserInfo extends Component {
  logout = () => {
    localStorage.removeItem('user');
  }

  render() {
    return (
      <div>
        <UserInfoData />
        <Settings />
        <NavDropdown title = {this.props.userData.firstName + ' ' + this.props.userData.lastName} id='nav-dropdown' className = {styles.navBar}>
          <MenuItem onClick={() => this.props.toggleUserInfo(true)}>
            Info
          </MenuItem>
          <MenuItem divider />
            <MenuItem onClick={() => this.props.toggleUserSettings(true)}>
              Postavke
            </MenuItem>
          <MenuItem divider />
          <MenuItem onClick={this.logout}>
            Odjava
          </MenuItem>
        </NavDropdown>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUserInfo: (value) => dispatch(toggleUserInfo(value)),
    toggleUserSettings: (value) => dispatch(toggleUserSettings(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
