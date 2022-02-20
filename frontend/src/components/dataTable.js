import React, { useState, useEffect } from 'react';
import api from '../services/api';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Modal, Form, Notification, Button, ButtonGroup, Navbar, Nav,} from 'rsuite';

import 'rsuite/dist/rsuite.min.css'

export default function DataTable(props) {

  console.log('porps.items:')
  console.log(props.items[1])

  return (
    <div className="table-container">
      <Table data={props.items[1]} height={500} onRowClick={data => { console.log(data); }}>

        <Column width={100} align="center">
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={300} align="center" sortable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={300} align="center" sortable>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={300} align="center" sortable>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={300} align="center">
          <HeaderCell>Action</HeaderCell>
          <Cell>
            {rowData => {
            //   function deleteRow() {

            //     // api.delete(`api/${link}/delete/${rowData.id}`,{}).then(response => {
          
            //     //   getUsers();
                  
            //     // }).catch(err => {
                
            //     //   alert(err)
                
            //     // });
            // }
            function editRow(action) {
              alert(`edit id:${rowData.id}`);
            }
            return (
              <ButtonGroup>
                <Button color="blue" appearance="subtle" onClick={editRow}> Edit </Button> 
                {/* <Button color="red" appearance="subtle" onClick={deleteRow}> Remove </Button>  */}
              </ButtonGroup>
           );
          }}              
        </Cell>
      </Column>

    </Table>

    
    </div>
  );
  
}