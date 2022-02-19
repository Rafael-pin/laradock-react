import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';

export default function UsersPage() {

  const [userList, setUsersList] = useState([]);
  
  useEffect(() => {
    
    api.get('api/user',{}).then(response => {


      console.log('Response:')
      console.log(response);

      setUsersList([...userList, response.data.data]);

    }).catch(err => {

      alert(err)

    });

  }, []);



  return (
    <div className="users-container">
      <section className="form">

      <StyledEngineProvider injectFirst>

      {userList}

        {/* <CrudTable data={userList} /> */}

      </StyledEngineProvider>,

      </section>
    </div>
  );
}