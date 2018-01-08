import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import UserInfoData from './UserInfoData';
import SettingsContainer from './SettingsContainer';
import {toggleUserInfo} from "../../../actions/userInfoActions";
import {toggleUserSettings} from "../../../actions/userSettingsActions";
import {withRouter} from 'react-router-dom';

class UserInfo extends Component {
  logout = () => {
    localStorage.removeItem('user');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <UserInfoData />
        <SettingsContainer />
        <NavDropdown title = {this.props.userData.firstName + ' ' + this.props.userData.lastName} id='nav-dropdown'>
          <MenuItem onClick={() => {
            this.props.toggleUserInfo(true);
          }}>
            <span className='glyphicon glyphicon-info-sign' /> &nbsp;&nbsp; Informacije
          </MenuItem>
          <MenuItem divider />
            <MenuItem onClick={() => this.props.toggleUserSettings(true)}>
              <span className='glyphicon glyphicon-pencil' /> &nbsp;&nbsp; Postavke
            </MenuItem>
          <MenuItem divider />
          <MenuItem onClick={this.logout}>
            <span className='glyphicon glyphicon-log-out' /> &nbsp;&nbsp; Odjava
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfo));
