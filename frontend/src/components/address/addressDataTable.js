import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Button, ButtonGroup} from 'rsuite';
import 'rsuite/dist/rsuite.min.css'

export default function AddressDataTable(props) {

  return (
    <div className="table-container">
      <Table data={props.items ? props.items : []} height={500}>
       
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