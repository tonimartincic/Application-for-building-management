import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import getBuildingInfo from '../../actionCreators/buildingInfoActionCreator';

class App extends Component {
  componentDidMount() {
    this.props.getBuildingInfo(1);
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
    getBuildingInfo : buildingId => dispatch(getBuildingInfo(buildingId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
