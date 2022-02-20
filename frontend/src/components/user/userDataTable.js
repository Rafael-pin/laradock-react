import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Modal, Form, Notification, Button, ButtonGroup, Navbar, Nav,} from 'rsuite';

import 'rsuite/dist/rsuite.min.css'


export default function UserDataTable(props) {

  return (
    <div className="table-container">
      <Table data={props.items ? props.items : []} height={500}>
       
        <Column width={0} align="center">
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={0} align="center">
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

        <Column width={200} align="center" sortable>
          <HeaderCell>Phone</HeaderCell>
          <Cell dataKey="phone" />
        </Column>

        <Column width={300} align="center" sortable>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={0} align="center" sortable>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="company_id" />
        </Column>

        <Column width={300} align="center">
          <HeaderCell>Action</HeaderCell>
          <Cell>
            {rowData => {
              function deleteRow() {

                props.deleteRow(rowData.id)

            }
            function editRow() {
              // alert(`edit id:${rowData.id}`);
              
            }
            return (
              <ButtonGroup>
                <Button color="blue" appearance="subtle" onClick={editRow}> Edit </Button> 
                <Button color="red" appearance="subtle" onClick={deleteRow}> Remove </Button> 
              </ButtonGroup>
           );
          }}              
        </Cell>
      </Column>

    </Table>

    
    </div>
  );
  
}