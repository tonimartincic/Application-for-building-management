import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class ApartmentTable extends Component {
  render(){
    return(
      <div>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Br.</th>
            <th>Površina</th>
            <th>Ime vlasnika</th>
            <th>Prezime vlasnika</th>
            <th>E - Mail vlasnika</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.apartments
              .filter(apartment => apartment.building.id == this.props.buildingSelected)
              .map((apartment, index) => {
                return (
                  <Choose>
                    <When condition={apartment.owner !== null}>
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{apartment.area}</td>
                        <td>{apartment.owner.firstName}</td>
                        <td>{apartment.owner.lastName}</td>
                        <td>{apartment.owner.mail}</td>
                      </tr>
                    </When>
                    <Otherwise>
                      <tr key={index}>
                        <td>{index +1}</td>
                        <td>{apartment.area}</td>
                        <td>{""}</td>
                        <td>{""}</td>
                        <td>{""}</td>
                      </tr>
                    </Otherwise>
                  </Choose>
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
    apartments: state.apartments,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentTable);
