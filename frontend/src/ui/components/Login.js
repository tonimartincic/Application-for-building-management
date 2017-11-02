import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Form, FormGroup, Col, FormControl, Checkbox, Button, Well, Row} from 'react-bootstrap';
import validateUser from '../../actionCreators/loginActionCreator';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangeUserId = this.handleChangeUserId.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.validateUser(this.state.userId, this.state.password);

    this.setState({
      userId: '',
      password: null,
    });
  };

  handleChangeUserId = (event) => {
    this.setState({
      userId: event.target.value,
    });
  };


  handleChangePass = (event) => {
    this.setState({
      password: event.target.value,
    });
  };


  handleDelete = () => {
    this.setState({
      userId: '',
      password: '',
    });
  };


  render() {
    return (
      <div>
        <Well>
          <Row>
            <Col md = {1} mdOffset={2}>
            <section>
              <span>Korisnicko ime:</span>
            </section>
            </Col>
            <Col md = {5}>
            <FormControl
              type="text"
              value={this.state.userId}
              placeholder="Korisničko ime"
              onChange={this.handleChangeUserId}
            />
            </Col>
          </Row>
          <Row>
            <Col md = {1} mdOffset={2}>
            <section>
              <span>Lozinka:</span>
            </section>
            </Col>
          <Col md = {5}>
              <FormControl
                type="password"
                value={this.state.password}
                placeholder="Lozinka"
                onChange={this.handleChangePass}
              />
          </Col>
          </Row>
          <Row>
            <form>
              <section>
                <Button
                  bsStyle='primary'
                  type='submit'
                  onClick={this.handleSubmit}
                ><span>Prijava</span></Button>
                <Button
                  bsStyle='warning'
                  type='button'
                  onClick={this.handleDelete}
                ><span>Resetiraj</span></Button>
              </section>
            </form>
          </Row>
        </Well>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    validateUser: (userId, password) => dispatch(validateUser(userId, password)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
