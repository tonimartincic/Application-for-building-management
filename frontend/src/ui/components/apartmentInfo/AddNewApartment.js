import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row} from 'react-bootstrap';

class AddNewApartment extends React.Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.addNewApartmentClicked}
          onHide={() => {
            this.props.toggleAddNewApartment();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novi stan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.props.buildingAddressValidation || this.props.addressAlreadyExists}
              >
                <ControlLabel>Površina</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Unesi površinu stana"
                  onChange={this.props.handleChangeArea}
                />
              </FormGroup>
              <Row>
                <Col md={7}>
                  <section>
                    <Collapse in={this.props.apartmentAreaValidation==='error'}>
                      <p>Morate unijeti površinu stana.</p>
                    </Collapse>
                  </section>
                </Col>
              </Row>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.handleSubmitNewApartment()} >Potvrdi</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddNewApartment;
