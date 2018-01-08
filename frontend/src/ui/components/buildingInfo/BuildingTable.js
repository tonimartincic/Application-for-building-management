import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class BuildingTable extends Component {
  render(){
    return(
      <div>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Adresa</th>
            <th>Upravitelj</th>
            <th>Predstavnik stanara</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.buildings
              .map((building, index) => {
                const manager = building.manager === null ? "" : building.manager;
                const landlord = building.landlord === null ? "" : building.landlord;
                return (
                  <tr key={index}>
                    <td>{building.address}</td>
                    <td>{manager.mail}</td>
                    <td>{landlord.mail}</td>
                  </tr>
                )
          })
          }
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buildings: state.buildings,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingTable);
