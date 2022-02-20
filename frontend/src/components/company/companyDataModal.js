import React, { useState, useEffect } from 'react';
import { Modal, Form, SelectPicker, Button } from 'rsuite';

export default function CompanyDataModal(props) {
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });

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
          <Modal.Title>New Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form fluid onChange={setFormValue} formValue={formValue}>
                <Form.Group controlId="name-9">
                  <Form.ControlLabel>Name</Form.ControlLabel>
                  <Form.Control name="name" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="email-9">
                  <Form.ControlLabel>CNPJ</Form.ControlLabel>
                  <Form.Control name="cnpj" type="email" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="company_id-9">
                  <Form.ControlLabel>Address_id</Form.ControlLabel>
                  <Form.Control name="address_id" type="number" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
              Confirm
          </Button>
          <Button onClick={handleClose} appearance="subtle">
              Cancel
          </Button>
          </Modal.Footer>
      </Modal>
      <Button onClick={handleOpen}>New Company</Button>
    </div>
  );
};