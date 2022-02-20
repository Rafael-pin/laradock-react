import React, { useState, useEffect } from 'react';
import api from '../services/api';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Modal, Form, Notification, Button, ButtonGroup, Navbar, Nav,} from 'rsuite';

import 'rsuite/dist/rsuite.min.css'

export default function MainPage() {

  const [items, setItems] = useState([]);

  const getItems = async (link) =>{

    api.get(`api/${link}`,{}).then(response => {

      setItems([items, response.data.data]);

    }).catch(err => {

      alert(err)

    });
  }

  const [open, setOpen] = React.useState(false);
  const [backdrop, setBackdrop] = React.useState('static');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const activeKey = '';

  const onSelect = (eventKey) => {
    getItems('user')
  };

  function RenderTable() {
    if(items) {
      return <Table data={items}/>
    }
  }

  return (
    <div className="users-container">

      {/* <Navbar onSelect={onSelect} activeKey={activeKey}> */}
      <Navbar>

        <Navbar.Brand href="#">
          React + laravel basic crud
        </Navbar.Brand>
        <Nav>
          <Nav.Item onSelect={onSelect} eventKey="user">Users</Nav.Item>
          <Nav.Item eventKey="companies" >Companies</Nav.Item>
          <Nav.Item eventKey="addresses" >Addresses</Nav.Item>
        </Nav>
        <Nav pullRight>
            <Nav.Item onClick={handleOpen}> 
              new 
            </Nav.Item>
          </Nav>
      </Navbar>
    
    </div>
  );
  
}