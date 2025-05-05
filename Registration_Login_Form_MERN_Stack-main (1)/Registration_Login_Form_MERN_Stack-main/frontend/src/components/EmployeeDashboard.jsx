// import React from 'react';

// const EmployeeDashboard = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Employee Dashboard</h1>
//       <p>Welcome to the Employee Dashboard!</p>
//       <ul>
//         <li>View Profile</li>
//         <li>Manage Tasks</li>
//         <li>View Reports</li>
//         <li>Settings</li>
//       </ul>
//     </div>
//   );
// };

// export default EmployeeDashboard;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const EmployeeDashboard = () => {
//   return (
//     <div>
//       <div
//         className="d-flex justify-content-center align-items-center text-center vh-100"
//         style={{
//           backgroundImage: 'linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))',
//         }}
//       >
//         <div className="bg-white p-3 rounded" style={{ width: '60%' }}>
//           <h2 className="mb-3 text-primary">Employee Dashboard</h2>
//           <p className="text-secondary">Welcome to the Employee Dashboard!</p>
//           <ul className="list-group text-start">
//             <li className="list-group-item">View Profile</li>
//             <li className="list-group-item">Manage Tasks</li>
//             <li className="list-group-item">View Reports</li>
//             <li className="list-group-item">Settings</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ViewProfile from './ViewProfile';

const EmployeeDashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

 
  useEffect(() => {
    axios
      .get('http://localhost:3001/user-data') 
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center text-center vh-100"
        style={{
          backgroundImage: 'linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))',
        }}
      >
        <div className="bg-white p-3 rounded" style={{ width: '60%' }}>
          <h2 className="mb-3 text-primary">Employee Dashboard</h2>
          <p className="text-secondary">
            Welcome, {userData ? userData.name : 'Loading...'}!
          </p>
          <ul className="list-group text-start">
            <li
              className="list-group-item list-group-item-action"
              onClick={() => handleNavigation('/profile')}
              style={{ cursor: 'pointer' }}
            >
              View Profile
            </li>
            <li
              className="list-group-item list-group-item-action"
              onClick={() => handleNavigation('/tasks')}
              style={{ cursor: 'pointer' }}
            >
              Manage Tasks
            </li>
            <li
              className="list-group-item list-group-item-action"
              onClick={() => handleNavigation('/reports')}
              style={{ cursor: 'pointer' }}
            >
              View Reports
            </li>
            <li
              className="list-group-item list-group-item-action"
              onClick={() => handleNavigation('/settings')}
              style={{ cursor: 'pointer' }}
            >
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;



// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EmployeeDashboard = () => {
//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   // Fetch user data
//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/user-data') // Replace with your API endpoint
//       .then((response) => {
//         setUserData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   // Handle navigation to different sections
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div>
//       <div
//         className="d-flex justify-content-center align-items-center text-center vh-100"
//         style={{
//           backgroundImage: 'linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))',
//         }}
//       >
//         <div className="bg-white p-4 rounded shadow" style={{ width: '60%' }}>
//           <h2 className="mb-4 text-primary">Employee Dashboard</h2>
//           <p className="text-secondary">
//             Welcome, {userData ? userData.name : 'Loading...'}!
//           </p>
//           <div className="list-group">
//             <button
//               className="btn btn-outline-primary mb-2"
//               onClick={() => handleNavigation('/profile')}
//             >
//               View Profile
//             </button>
//             <button
//               className="btn btn-outline-success mb-2"
//               onClick={() => handleNavigation('/tasks')}
//             >
//               Manage Tasks
//             </button>
//             <button
//               className="btn btn-outline-info mb-2"
//               onClick={() => handleNavigation('/reports')}
//             >
//               View Reports
//             </button>
//             <button
//               className="btn btn-outline-warning"
//               onClick={() => handleNavigation('/settings')}
//             >
//               Settings
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;