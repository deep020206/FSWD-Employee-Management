// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ManageTasks = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     // Fetch tasks from the backend
//     axios
//       .get('http://localhost:3001/tasks') // Replace with your API endpoint
//       .then((response) => {
//         setTasks(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching tasks:', error);
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-primary">Manage Tasks</h2>
//       {tasks.length > 0 ? (
//         <ul className="list-group">
//           {tasks.map((task, index) => (
//             <li key={index} className="list-group-item">
//               {task.title} - {task.status}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No tasks available.</p>
//       )}
//     </div>
//   );
// };

// export default ManageTasks;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ManageTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/tasks') // Replace with your API endpoint
//       .then((response) => {
//         setTasks(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching tasks:', error);
//       });
//   }, []);

//   const handleAddTask = () => {
//     axios
//       .post('http://localhost:3001/tasks', { title: newTask, status: 'Pending' }) // Replace with your API endpoint
//       .then((response) => {
//         setTasks([...tasks, response.data]);
//         setNewTask('');
//       })
//       .catch((error) => {
//         console.error('Error adding task:', error);
//       });
//   };

//   const handleDeleteTask = (id) => {
//     axios
//       .delete(`http://localhost:3001/tasks/${id}`) // Replace with your API endpoint
//       .then(() => {
//         setTasks(tasks.filter((task) => task.id !== id));
//       })
//       .catch((error) => {
//         console.error('Error deleting task:', error);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-primary">Manage Tasks</h2>
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="New Task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button className="btn btn-success mt-2" onClick={handleAddTask}>
//           Add Task
//         </button>
//       </div>
//       <ul className="list-group">
//         {tasks.map((task) => (
//           <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
//             {task.title}
//             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ManageTasks;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/tasks') // Replace with your API endpoint
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleAddTask = () => {
    if (!newTask.trim()) {
      alert('Task title cannot be empty!');
      return;
    }

    axios
      .post('http://localhost:3001/tasks', { title: newTask, status: 'Pending' }) // Replace with your API endpoint
      .then((response) => {
        if (response.data) {
          setTasks([...tasks, response.data]); // Add the new task to the state
          setNewTask(''); // Clear the input field
        } else {
          alert('Failed to add task. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error adding task:', error);
        alert('An error occurred while adding the task.');
      });
  };

  const handleDeleteTask = (id) => {
    axios
      .delete(`http://localhost:3001/tasks/${id}`) // Replace with your API endpoint
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary">Manage Tasks</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {task.title}
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTasks;