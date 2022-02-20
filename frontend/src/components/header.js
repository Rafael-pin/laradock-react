import React, { useState, useEffect } from 'react';


import api from '../services/api';

import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';

import UserDataModal from '../components/user/userDataModal';
import CompanyDataModal from '../components/company/companyDataModal';
import AddressDataModal from '../components/address/addressDataModal';

export default function Header(props) {

  return (
    <Navbar>
      <Navbar.Brand href="#">
        React + laravel basic crud
      </Navbar.Brand>
      <Nav onSelect={props.onSelect}>
        <Nav.Item eventKey="user">Users</Nav.Item>
        <Nav.Item eventKey="company" >Companies</Nav.Item>
        <Nav.Item eventKey="address" >Addresses</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item onClick={props.handleOpen}>
          <UserDataModal/>
        </Nav.Item>
        <Nav.Item onClick={props.handleOpen}>
          <CompanyDataModal/>
        </Nav.Item>
        <Nav.Item onClick={props.handleOpen}>
          <AddressDataModal/>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
