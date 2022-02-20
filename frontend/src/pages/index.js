import React, { useState, useEffect } from 'react';
import api from '../services/api';
import 'rsuite/dist/rsuite.min.css'
import Header from '../components/header';
import UserDataTable from '../components/user/userDataTable';
import AddressDataTable from '../components/address/addressDataTable';
import CompanyDataTable from '../components/company/companyDataTable';

export default function MainPage() {
  const [items, setItems] = useState([]);
  const [eventKey, setEventKey] = useState('');

  const deleteRow = (id) => {

    api.delete(`api/${eventKey}/delete/${id}`, {}).then(response => {

      getItems(eventKey);

    }).catch(err => {

      alert(err)

    });
  }

  const editRow = (dataRow) => {}

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
        return <UserDataTable items={items[1]} deleteRow={deleteRow} editRow={editRow}/>
      case 'address':
        return <AddressDataTable items={items[1]} deleteRow={deleteRow} editRow={editRow}/>
      case 'company':
        return <CompanyDataTable items={items[1]} deleteRow={deleteRow} editRow={editRow}/>
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