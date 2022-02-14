import React,{useEffect} from 'react'
import Table from 'react-bootstrap/table';
import axios from 'axios';
import {useState} from 'react';
import url from '../path.js';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
const navigate=useNavigate();
const [auth,setAuth]=useState(false);
useEffect(()=>{
  console.log(url);
  const token=localStorage.getItem('auth_token');
  if(token!==null)
  {
    console.log(token);
    setAuth(true);
  }
  console.log(auth);
  if(auth)
  {
      axios.get(url+"mms/ticket",{
      headers:{
        Authorization:'Bearer '+token 
      }
    }).then(response=>console.log(response.data))
      .catch(error=>console.log('error'))
  }
  else navigate('/');
})
	return (
		<div>
			<h2>This is dashboard component</h2>
  	</div>
	)
}

export default Dashboard