import React, { useState, useEffect } from 'react';
import api from '../services/api';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';

// import 'rsuite-table/lib/less/index.less';

import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'

export default function UsersPage() {

  const [userList, setUsersList] = useState([]);
  
  useEffect(() => {
    
    api.get('api/user',{}).then(response => {

      console.log('Response:')
      console.log(response);

      setUsersList([userList, response.data.data]);

    }).catch(err => {

      alert(err)

    });

  }, []);


  console.log(userList);


  return (
    <div className="users-container">

      <Table data={userList[1]} 
        height={400}
        onRowClick={data => {
          console.log(data);
        }
      }>

        <Column width={10} align="center" fixed>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={40} align="center" sortable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={40} align="center" sortable>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={40} align="center" sortable>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={120} fixed="right">
        <HeaderCell>Action</HeaderCell>

        <Cell>
          {rowData => {
            function handleAction() {
              alert(`id:${rowData.id}`);
            }
            return (
              <span>
                <a onClick={handleAction}> Edit </a> | <a onClick={handleAction}> Remove </a>
              </span>
            );
          }}
        </Cell>
      </Column>

      </Table>
    </div>
  );
}