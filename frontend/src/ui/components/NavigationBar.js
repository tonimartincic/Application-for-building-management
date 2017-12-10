/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './navigationBar.css';
import UserInfo from './UserInfo';

class NavigationBar extends Component {
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
            to='/first-page'
            href='/first-page'
          >
            <span className={styles.span}>
              First page
            </span>
          </NavItem>

          <NavItem
            componentClass={Link}
            to='/second-page'
            href='/second-page'
          >
            <span className={styles.span}>
              Second page
            </span>
          </NavItem >
          <Nav >
            <NavItem >
              <UserInfo />
            </NavItem>
          </Nav>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
