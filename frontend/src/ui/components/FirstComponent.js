import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import NavigationBar from "./NavigationBar";

class FirstComponent extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Button/>
      </div>
    );
  }
}

export default FirstComponent;
