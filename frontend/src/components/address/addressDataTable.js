import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Modal, Form, Notification, Button, ButtonGroup, Navbar, Nav,} from 'rsuite';

import 'rsuite/dist/rsuite.min.css'


export default function AddressDataTable(props) {

  return (
    <div className="table-container">
      <Table data={props.items ? props.items : []} height={500} onRowClick={data => { console.log(data); }}>
       
        <Column width={0} align="center">
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={500} align="center">
          <HeaderCell>Cep</HeaderCell>
          <Cell dataKey="cep" />
        </Column>

        <Column width={300} align="center" sortable>
          <HeaderCell>Number</HeaderCell>
          <Cell dataKey="number" />
        </Column>

        <Column width={300} align="center">
          <HeaderCell>Action</HeaderCell>
          <Cell>
            {rowData => {
            function deleteRow() {
              props.deleteRow(rowData.id)
            }
            function editRow() {
              props.editRow(rowData)
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