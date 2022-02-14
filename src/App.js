import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Test from './Components/Test';
import {Routes,Route,Navigate} from 'react-router-dom';
import React,{useState} from 'react';
function App() {
  // const [authorized]=useState(false);
  const AuthContext=React.createContext();
  return (
    <div>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='dashboard' element={<Dashboard/>}></Route>
      <Route path='*' element={<p>The page is not found</p>}></Route>
    </Routes>
    </div>
  );
}

export default App;
