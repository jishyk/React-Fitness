// import React from "react";

// const Dashboard = () => {
    
//     return (
//         <div>
//             <h1>Dashboard</h1>
//         </div>
//     );
// }

// export default Dashboard;

// Dashboard.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import AuthService from '../utils/auth';

const Dashboard = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  const user = data?.me;

  if (!user) {
    return <div>No user found</div>;
  }

  const username = user.username;
  

  return (
    <div>
      <h1>Welcome {username}</h1>
      
      <button onClick={AuthService.logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
