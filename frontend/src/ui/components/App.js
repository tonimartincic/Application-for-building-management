import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import getBuildingInfo from '../../actionCreators/buildingInfoActionCreator';

class App extends Component {

  componentDidMount() {
    getBuildingInfo();
  }


  render() {



    return (
      <Button> App </Button>
    );
  }
}

export default App;
