import React, { useState, useEffect } from 'react';
import api from '../services/api';
import 'rsuite/dist/rsuite.min.css'

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Modal, Form, Notification, Button, ButtonGroup, Navbar, Nav, } from 'rsuite';

import { Container, Content, Footer, Sidebar } from 'rsuite';

import Header from '../components/header';

import UserDataTable from '../components/user/userDataTable';
import AddressDataTable from '../components/address/addressDataTable';
import CompanyDataTable from '../components/company/companyDataTable';


export default function MainPage() {

  const [items, setItems] = useState([]);
  const [eventKey, setEventKey] = useState('');
  const [open, setOpen] = React.useState(false);

  const deleteRow = (id) => {

    api.delete(`api/${eventKey}/delete/${id}`, {}).then(response => {

      getItems(eventKey);

    }).catch(err => {

      alert(err)

    });
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getItems = (eventKey) => {

    setEventKey(eventKey)

    api.get(`api/${eventKey}`, {}).then(response => {

      setItems([items, response.data.data]);

    }).catch(err => {

      alert(err)

    });
  }

  const RenderTable = () => {
    switch(eventKey) {
      case 'user':
        return <UserDataTable items={items[1]} deleteRow={deleteRow}/>
      case 'address':
        return <AddressDataTable items={items[1]} deleteRow={deleteRow}/>
      case 'company':
        return <CompanyDataTable items={items[1]} deleteRow={deleteRow}/>
    }
    return '';
  }

  return (
    <div className="page-container">

      <Header eventKey={eventKey} onSelect={getItems}/>

      <RenderTable />

    </div>
  );

}