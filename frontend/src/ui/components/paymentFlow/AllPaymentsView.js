import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col, Row, Well} from 'react-bootstrap';
import NavigationBar from "../NavigationBar";
import GeneratePaymentInputForm from "./GeneratePaymentInputForm";
import PaymentsTable from "./PaymentsTable";
import fetchBuildings from "../../../actionCreators/buildingsActionCreators";
import fetchApartments from "../../../actionCreators/apartmentsActionCreators";

class AllPaymentsView extends Component {

  componentWillMount() {
    this.props.fetchApartments();
  }

  constructor(props) {
    super(props);
    this.state = {
      generatePaymentsClicked: false,
    };
    this.toggleGeneratePaymentsClicked = this.toggleGeneratePaymentsClicked.bind(this);
  }

  toggleGeneratePaymentsClicked() {
    const generatePaymentsClickedTemp = this.state.generatePaymentsClicked;
    this.setState({
      generatePaymentsClicked: !generatePaymentsClickedTemp,
    })
  }


  render() {
    return (
      <div>
        <NavigationBar/>
        <Col mdOffset={1}>
          <Button onClick={() => this.toggleGeneratePaymentsClicked()}>Generiraj naloge</Button>
        </Col>
        <GeneratePaymentInputForm
          generatePaymentsClicked={this.state.generatePaymentsClicked}
          toggleGeneratePaymentsClicked={this.toggleGeneratePaymentsClicked}/>
        <br />
        <Row>
          <Col mdOffset={2} md={8}>
            <Well>
              <Row>
                <Col md={7}>
                  <p>Trenutna količina zajedničkog novca zgrade (u kunama):</p>
                </Col>
                <Col md={3}>
                  {
                    this.props.apartments
                      .filter(apartment => apartment.owner !== null)
                      .filter(apartment => apartment.owner.id === this.props.userData.id)
                      .map(apartment => {
                        const tmp =apartment.building.address + " - " + apartment.building.funds;
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
          <PaymentsTable />
        </Col>
        </Row>
      </div>
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
