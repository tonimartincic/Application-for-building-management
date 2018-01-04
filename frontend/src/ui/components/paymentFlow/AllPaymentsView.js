import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col, Row, Well} from 'react-bootstrap';
import NavigationBar from "../navigationBar/NavigationBar";
import GeneratePaymentInputForm from "./GeneratePaymentInputForm";
import PaymentsTable from "./PaymentsTable";
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";
import fetchApartments from "../../../actionCreators/apartmentsActionCreators";
import * as styles from './allPaymentsView.css';

class AllPaymentsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generatePaymentsClicked: false,
    };

    this.toggleGeneratePaymentsClicked = this.toggleGeneratePaymentsClicked.bind(this);
  }

  componentWillMount() {
    this.props.fetchApartments();
  }

  toggleGeneratePaymentsClicked() {
    const generatePaymentsClickedTemp = this.state.generatePaymentsClicked;
    this.setState({
      generatePaymentsClicked: !generatePaymentsClickedTemp,
    })
  }

  render() {
    return (
      <section>
        <NavigationBar/>
        <section className={styles.sectionMain}>
          <Row>
            <Col mdOffset={2} md={8}>
              <Well>
                <Row>
                  <Col md={8}>
                    {
                      this.props.apartments
                        .filter(apartment => apartment.owner !== null)
                        .filter(apartment => apartment.owner.id === this.props.userData.id)
                        .map(apartment => {
                          const tmp = 'Trenutni iznos zajedničkog novca zgrade "' + apartment.building.address + '":  ' + apartment.building.funds + ' kn';
                          return(
                            <p key={apartment.id}>
                              {tmp}
                            </p>
                          )
                        })
                    }
                  </Col>
                </Row>
              </Well>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <section className={styles.sectionTable}>
                <PaymentsTable />
             </section>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <section className={styles.sectionButtons}>
                <Button onClick={() => this.toggleGeneratePaymentsClicked()}>Generiraj naloge</Button>
              </section>
            </Col>
            <GeneratePaymentInputForm
              generatePaymentsClicked={this.state.generatePaymentsClicked}
              toggleGeneratePaymentsClicked={this.toggleGeneratePaymentsClicked}
            />
          </Row>
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    apartments: state.apartments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBuildings: () => (dispatch(fetchBuildings())),
    fetchApartments: () => (dispatch(fetchApartments())),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllPaymentsView));
