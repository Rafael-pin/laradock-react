import React, { useState, useEffect } from 'react';
import { Modal, Form, SelectPicker, Button } from 'rsuite';
import api from '../../services/api';


export default function AddressEditModal(props) {
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    cep: '',
    number: '',
  });

  const handleEdit = () => {
    setOpen(true);

    console.log('edit')

    // api.post(`api/address/new`, formValue).then(response => {

    //   alert('success');

    // }).catch(err => {

    //   alert(err)

    // });
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} size="xs">
          <Modal.Header>
          <Modal.Title>New Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form fluid onChange={setFormValue} formValue={formValue}>
                <Form.Group controlId="dep">
                  <Form.ControlLabel>CEP</Form.ControlLabel>
                  <Form.Control name="cep" type="number" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="number">
                  <Form.ControlLabel>Number</Form.ControlLabel>
                  <Form.Control name="number" type="number" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={handleEdit} appearance="primary">
              Confirm
          </Button>
          <Button onClick={handleClose} appearance="subtle">
              Cancel
          </Button>
          </Modal.Footer>
      </Modal>
      <Button onClick={handleOpen}>New Address</Button>
    </div>
  );
};