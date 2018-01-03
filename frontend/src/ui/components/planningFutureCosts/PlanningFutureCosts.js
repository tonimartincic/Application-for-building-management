import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchFutureCosts from '../../../actionCreators/costsActionCreators';
import NavigationBar from "../navigationBar/NavigationBar";
import AddNewFutureCost from "./AddNewFutureCost";
import UpdateFutureCost from "./UpdateFutureCost";
import * as styles from './planningFutureCosts.css';

class PlanningFutureCosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addNewFutureCostClicked: false,
      updateFutureCostClicked: false,
    };

    this.toggleAddNewFutureCost = this.toggleAddNewFutureCost.bind(this);
    this.toggleUpdateFutureCost = this.toggleUpdateFutureCost.bind(this);
  }

  componentDidMount() {
    this.props.fetchFutureCosts();
  }

  toggleAddNewFutureCost() {
    const addNewFutureCostClickedTemp = this.state.addNewFutureCostClicked;
    this.setState({
      addNewFutureCostClicked: !addNewFutureCostClickedTemp,
    });
  }

  toggleUpdateFutureCost() {
    const updateFutureCostClickedTemp = this.state.updateFutureCostClicked;
    this.setState({
      updateFutureCostClicked: !updateFutureCostClickedTemp,
    });
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Kreator</th>
                  <th>Iznos</th>
                  <th>Opis</th>
                  <th>Datum kreiranja</th>
                  <th>Hitnost</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.costs
                    .map((cost, index) => {
                      return (
                        <tr key={index}>
                          <td>{cost.creator.firstName + ' ' + cost.creator.lastName}</td>
                          <td>{cost.amount + ' kn'}</td>
                          <td>{cost.description}</td>
                          <td>{cost.createdOn}</td>
                          <td>{cost.urgent ? 'Hitno' : 'Nije hitno'}</td>
                          <td>{cost.status}</td>
                          <Choose>
                            <When condition={cost.urgent}>
                              <td>
                                <span className='glyphicon glyphicon-warning-sign' />
                              </td>
                            </When>
                            <Otherwise>
                              <td />
                            </Otherwise>
                          </Choose>
                        </tr>
                      )}
                    )
                }
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <section className={styles.sectionButtons}>
                <Button
                  className={styles.button}
                  onClick={() => this.toggleAddNewFutureCost()}
                >Dodaj novi trošak</Button>

                <Button
                  className={styles.button}
                  onClick={() => this.toggleUpdateFutureCost()}
                >Ažuriraj podatke</Button>
              </section>
            </Col>
          </Row>
          <Row>
            <Col>
              <AddNewFutureCost
                addNewFutureCostClicked={this.state.addNewFutureCostClicked}
                toggleAddNewFutureCost={this.toggleAddNewFutureCost}
                costs={this.props.costs}/>
              <UpdateFutureCost
                updateFutureCostClicked={this.state.updateFutureCostClicked}
                toggleUpdateFutureCost={this.toggleUpdateFutureCost}
                costs={this.props.costs}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    costs: state.costs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFutureCosts: () => dispatch(fetchFutureCosts()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlanningFutureCosts));
