import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Col, Modal, Collapse, Row} from 'react-bootstrap';

class AddNewBuilding extends React.Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.addNewBuildingClicked}
          onHide={() => {
            this.props.toggleAddNewBuilding();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novu zgradu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.props.buildingAddressValidation || this.props.addressAlreadyExists}
              >
                <ControlLabel>Adresa</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Unesi adresu zgrade"
                  onChange={this.props.handleChangeAddress}
                />
              </FormGroup>
              <Row>
                <Col md={7}>
                  <section>
                    <Collapse in={this.props.buildingAddressValidation==='error'}>
                      <p>Morate unijeti adresu zgrade.</p>
                    </Collapse>
                    <Collapse in={this.props.addressAlreadyExists==='error'}>
                      <p>Zgrada na odabranoj adresi već postoji.</p>
                    </Collapse>
                  </section>
                </Col>
              </Row>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.handleSubmitNewBuilding()} >Potvrdi</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddNewBuilding;
