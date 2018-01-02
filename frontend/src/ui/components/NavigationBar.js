import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './navigationBar.css';
import UserInfo from './UserInfo';
import { connect } from 'react-redux';
import { fetchUserData } from '../../actionCreators/userDataActionCreators';

class NavigationBar extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    return (
      <Navbar className={styles.navBar} >
        <Navbar.Header className={styles.navCenter}>
          <Navbar.Brand>
            <Link to='/'>
              <span className={styles.span}>
                Eureka
              </span>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className={styles.navCenter}>
          <NavItem
            componentClass={Link}
            to='/board'
            href='/board'
          >
            <span className={styles.span}>
              Oglasna ploča
            </span>
          </NavItem>
          <NavItem
            componentClass={Link}
            to='/planning-future-costs'
            href='/planning-future-costs'
          >
            <span className={styles.span}>
              Planiranje budućih troškova
            </span>
          </NavItem>
          <NavItem
            componentClass={Link}
            to='/snow-clearing-schedule'
            href='/snow-clearing-schedule'
          >
            <span className={styles.span}>
              Raspored čišćenja snijega
            </span>
          </NavItem >
          <NavItem >
            <UserInfo />
          </NavItem>
          <Choose>
            <When condition={this.props.userData.privilege === 'Administrator'}>
              <NavItem
                componentClass={Link}
                to='/all-users'
                href='/all-users'>
                <span className={styles.span}>
                  Korisnici
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
