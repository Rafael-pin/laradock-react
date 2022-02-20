import React from 'react';
import { Modal, Form, Button } from 'rsuite';
import api from '../../services/api';

export default function UserDataModal(props) {
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    phone: '',
    company_id: '',
    birthdate: '',
    city: ''
  });

  const handleCreate = () => {
    setOpen(false);

    api.post(`api/user/new`, formValue).then(response => {

      alert('success');

    }).catch(err => {

      alert(err)

    });
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
          <Modal.Title>New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form fluid onChange={setFormValue} formValue={formValue}>
                <Form.Group controlId="name">
                  <Form.ControlLabel>Name</Form.ControlLabel>
                  <Form.Control name="name" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" type="email" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.ControlLabel>Phone</Form.ControlLabel>
                  <Form.Control name="phone" type="number" autoComplete="off" />
                </Form.Group>
                <Form.Group controlId="birthdate">
                  <Form.ControlLabel>Birthdate</Form.ControlLabel>
                  <Form.Control name="birthdate" type="date" />
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.ControlLabel>City</Form.ControlLabel>
                  <Form.Control name="city" type="text" />
                </Form.Group>
                <Form.Group controlId="company_id">
                  <Form.ControlLabel>Company_id</Form.ControlLabel>
                  <Form.Control name="company_id" type="number" />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={handleCreate} appearance="primary">
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