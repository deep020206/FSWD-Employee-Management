import Home from './Home';
import Login from './Login';
import Register from './Register';
import EmployeeDashboard from './EmployeeDashboard'
import ViewProfile from './ViewProfile';
import ManageTasks from './ManageTasks';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/manage-tasks" element={<ManageTasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
