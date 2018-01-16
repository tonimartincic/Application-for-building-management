import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchFutureCosts from '../../../actionCreators/costsActionCreators';
import { fetchBuildingForCurrentUser } from "../../../actionCreators/buildingsActionCreators";
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
    this.props.fetchBuildingForCurrentUser();
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
    let buildingFunds = null;
    if(this.props.userBuilding !== null) {
      buildingFunds = 'Trenutni iznos zajedničkog novca zgrade "' + this.props.userBuilding.address + '":  ' + this.props.userBuilding.funds + ' kn';
    }

    return (
      <section>
        <NavigationBar/>
        <section className={styles.sectionMain}>
          <Grid>
            <Row>
              <Col mdOffset={2} md={8}>
                <Well>
                  <Row>
                    <Col md={8}>
                      <p>
                        { buildingFunds }
                      </p>
                    </Col>
                  </Row>
                </Well>
              </Col>
            </Row>
            <Row>
              <Col md={8} mdOffset={2}>
                <section className={styles.sectionTable}>
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
                              <td>
                                {cost.urgent ? 'Hitno  ' : 'Nije hitno'}
                                {cost.urgent ? <span className='glyphicon glyphicon-warning-sign' /> : ''}
                              </td>
                              <td>
                                {cost.status}
                                {cost.status === 'Plaćeno' ? '  ' : ''}
                                {cost.status === 'Plaćeno' ? <span className='glyphicon glyphicon-ok' /> : ''}
                              </td>
                            </tr>
                          )}
                        )
                    }
                    </tbody>
                  </Table>
                </section>
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
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    costs: state.costs,
    userBuilding: state.userBuilding,
    userData: state.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFutureCosts: () => dispatch(fetchFutureCosts()),
    fetchBuildingForCurrentUser: () => (dispatch(fetchBuildingForCurrentUser())),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlanningFutureCosts));
