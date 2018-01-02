import React, {Component} from 'react';
import {Col, Row, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import styles from './cost.css';

class Cost extends Component {
  render() {
    const cost = this.props.cost;

    return (
      <section className={styles.sectionCost}>
        <Well>
          <span>{cost.description}</span>
        </Well>
      </section>
    )
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cost);
