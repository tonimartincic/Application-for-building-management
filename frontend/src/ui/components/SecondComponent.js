import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavigationBar from "./NavigationBar";

class SecondComponent extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Button>SecondComponent</Button>
      </div>
    );
  }
}

export default SecondComponent;
