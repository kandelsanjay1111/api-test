import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../login.css';
import axios from 'axios';
import {Navigate} from 'react-router-dom';

export default function Login() {
	const [username,setUsername]=useState('');
	const [password,setPassword]=useState('');
	const [error,setError]=useState(false);
	const [message,setMessage]=useState({});
	const [authorized,setAuthorized]=useState(false);
	const handleSubmit=(e)=>{
		e.preventDefault();
		// console.log(username,password);
		const data={username:username,password:password};
		console.log(data);
		axios.post("https://ticket.easy-q.online/auth/login",{username:username,password:password})
		.then((res)=>{
			console.log(res.data);
			localStorage.setItem('auth_token',res.data.token);
			setAuthorized(true);
			//redirect to dashboard
			if(authorized)
			{
				<Navigate to = '/dashboard'/>
			}
			// console.log('success response');
		})
		.catch((err)=>{
			console.log(err.response.data);
			setError(true);
			setMessage(err.response.data);
		})
	}
	return (
		<div className="Login">
		      <Form onSubmit={handleSubmit}>
		        <Form.Group size="lg" controlId="email">
		          <Form.Label>Username</Form.Label>
		          <Form.Control
		            autoFocus
		            type="text"
		            onChange={(e)=>setUsername(e.target.value)}
		          />
		        </Form.Group>
		        <Form.Group size="lg" controlId="password">
		          <Form.Label>Password</Form.Label>
		          <Form.Control
		            type="password"
		            onChange={(e)=>setPassword(e.target.value)}
		          />
		        {
		        	error?<div className="invalid-feedback">
		        			{message.message}
		        		</div>:''
		        }
		        </Form.Group>
		        
		        <Button block size="lg" type="submit">
		          Login
		        </Button>
		      </Form>
		</div>
	)
}