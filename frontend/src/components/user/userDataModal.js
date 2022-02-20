import React, { useState, useEffect } from 'react';
import { Modal, Form, SelectPicker, Button } from 'rsuite';

export default function UserDataModal(props) {
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
          <Modal.Title>New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form fluid onChange={setFormValue} formValue={formValue}>
                <Form.Group controlId="name-9">
                  <Form.ControlLabel>Name</Form.ControlLabel>
                  <Form.Control name="name" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="email-9">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" type="email" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="password-9">
                  <Form.ControlLabel>Phone</Form.ControlLabel>
                  <Form.Control name="phone" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group controlId="password-9">
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group controlId="company_id-9">
                  <Form.ControlLabel>Company_id</Form.ControlLabel>
                  <Form.Control name="company_id" type="number" />
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
      <Button onClick={handleOpen}>New User</Button>
    </div>
  );
};