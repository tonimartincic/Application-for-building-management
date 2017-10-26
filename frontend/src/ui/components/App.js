import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import getBuildingInfo from '../../actionCreators/buildingInfoActionCreator';

class App extends Component {
  componentDidMount() {
    this.props.getBuildingInfo();
  }

  render() {
    return (
      <Button> App </Button>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getBuildingInfo : () => dispatch(getBuildingInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
