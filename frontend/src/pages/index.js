import React, { useState, useEffect } from 'react';
import api from '../services/api';
import 'rsuite/dist/rsuite.min.css'

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Modal, Form, Notification, Button, ButtonGroup, Navbar, Nav,} from 'rsuite';

import Header from '../components/header';
import DataTable from '../components/dataTable';

export default function MainPage() {

  const [items, setItems] = useState([]);

  const deleteRow = (eventKey, rowData) => {

    api.delete(`api/${eventKey}/delete/${rowData.id}`,{}).then(response => {

      getItems();
      
    }).catch(err => {
    
      alert(err)
    
    });
  }

  const getItems = (eventKey) =>{

    api.get(`api/${eventKey}`,{}).then(response => {

      console.log('repsonse:')
      console.log(response)

      setItems([items, response.data.data]);

    }).catch(err => {

      alert(err)

    });
  }

  const handleOpen = () => {

  }

  const RenderTable = () => {
    return <DataTable items={items}/>
  }

  return (
    <div className="page-container">

      <Header onSelect={getItems} handleOpen={handleOpen}/>

      {/* <Table data={items}/> */}

      <RenderTable/>
    
    </div>
  );
  
}