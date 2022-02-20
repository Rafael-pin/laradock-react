import React  from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Button, ButtonGroup} from 'rsuite';


export default function CompanyDataTable(props) {

  return (
    <div className="table-container">
      <Table data={props.items ? props.items : []} height={500}>
       
        <Column width={0} align="center">
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={300} align="center">
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={300} align="center" sortable>
          <HeaderCell>CNPJ</HeaderCell>
          <Cell dataKey="cnpj" />
        </Column>

        <Column width={0} align="center" sortable>
          <HeaderCell>address_id</HeaderCell>
          <Cell dataKey="address_id" />
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