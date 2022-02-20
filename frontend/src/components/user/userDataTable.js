import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Button, ButtonGroup} from 'rsuite';

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
            function editRow() {}
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