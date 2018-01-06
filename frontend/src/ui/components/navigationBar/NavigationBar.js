import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './navigationBar.css';
import UserInfo from '../userInfo/UserInfo';
import Notifications from '../notifications/Notifications';
import { connect } from 'react-redux';
import { fetchUserData } from '../../../actionCreators/userDataActionCreators';
import { ADMINISTRATOR } from "../../../constants/values";

class NavigationBar extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    return (
      <Navbar className={styles.navBar}>
        <Navbar.Header className={styles.navCenter}>
          <Navbar.Brand>
            <Choose>
              <When condition={this.props.userData.privilege !== ADMINISTRATOR}>
                <Link to='/'>
                  <span className={styles.spanEureka}>
                    Eureka
                  </span>
                </Link>
              </When>
              <Otherwise>
                <Link to='/all-users'>
                  <span className={styles.spanEureka}>
                    Eureka
                  </span>
                </Link>
              </Otherwise>
            </Choose>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className={styles.navCenter}>
          <Choose>
            <When condition={this.props.userData.privilege !== ADMINISTRATOR}>
              <NavItem
                componentClass={Link}
                to='/board'
                href='/board'
              >
                <span className={styles.span}>
                  <span className='glyphicon glyphicon-list-alt' />    Oglasna ploča
                </span>
              </NavItem>
              <NavItem
                componentClass={Link}
                to='/planning-future-costs'
                href='/planning-future-costs'
              >
                <span className={styles.span}>
                  <span className='glyphicon glyphicon-file' />    Troškovi
                </span>
              </NavItem>
              <NavItem
                componentClass={Link}
                to='/payments'
                href='/payments'
              >
                <span className={styles.span}>
                  <span className='glyphicon glyphicon-euro' />    Nalozi
                </span>
              </NavItem>
              <NavItem
                componentClass={Link}
                to='/snow-clearing-schedule'
                href='/snow-clearing-schedule'
              >
                <span className={styles.span}>
                  <span className='glyphicon glyphicon-calendar'/>    Raspored čišćenja snijega
                </span>
              </NavItem>
            </When>
          </Choose>
          <NavItem >
            <UserInfo />
          </NavItem>
          <Choose>
            <When condition={this.props.userData.privilege !== ADMINISTRATOR}>
              <NavItem >
                <Notifications />
              </NavItem>
            </When>
          </Choose>
          <Choose>
            <When condition={this.props.userData.privilege === ADMINISTRATOR}>
              <NavItem
                componentClass={Link}
                to='/all-users'
                href='/all-users'>
                <span className={styles.span}>
                  <span className='glyphicon glyphicon-user' />    Korisnici
                </span>
              </NavItem>
            </When>
          </Choose>
        </Nav>
      </Navbar>
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
    fetchUserData: () => dispatch(fetchUserData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
