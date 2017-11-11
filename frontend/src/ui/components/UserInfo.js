import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as styles from './navigationBar.css';
import UserInfoData from './UserInfoData';
import {toggleUserInfo} from "../../actions/userInfoActions";

class UserInfo extends Component {

  logout = () => {
    window.location.href = '/';
  }

  render() {
    return (
      <div>
        <UserInfoData />
        <NavDropdown title = {this.props.userData.firstName + ' ' + this.props.userData.lastName} id='nav-dropdown' className = {styles.navBar}>
          <MenuItem onClick={() => this.props.toggleUserInfo(true)}>
            Info
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
