// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ViewProfile = () => {
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     // Fetch profile data from the backend
//     axios
//       .get('http://localhost:3001/profile') // Replace with your API endpoint
//       .then((response) => {
//         setProfileData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching profile data:', error);
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-primary">View Profile</h2>
//       {profileData ? (
//         <div className="card p-3">
//           <h4>Name: {profileData.name}</h4>
//           <p>Email: {profileData.email}</p>
//           <p>Position: {profileData.position}</p>
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };

// export default ViewProfile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', position: '' });

  useEffect(() => {
    axios
      .get('http://localhost:3001/profile') // Replace with your API endpoint
      .then((response) => {
        setProfileData(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    axios
      .put('http://localhost:3001/profile', formData) // Replace with your API endpoint
      .then((response) => {
        setProfileData(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary">View Profile</h2>
      {profileData ? (
        <div className="card p-3">
          {isEditing ? (
            <div>
              <input
                type="text"
                className="form-control mb-2"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                className="form-control mb-2"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                className="form-control mb-2"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              />
              <button className="btn btn-success" onClick={handleSave}>
                Save
              </button>
            </div>
          ) : (
            <div>
              <h4>Name: {profileData.name}</h4>
              <p>Email: {profileData.email}</p>
              <p>Position: {profileData.position}</p>
              <button className="btn btn-primary" onClick={handleEdit}>
                Edit Profile
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default ViewProfile;