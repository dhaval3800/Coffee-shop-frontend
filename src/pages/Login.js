import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/auth/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogin = () => {
    // Handle login logic here (e.g., send data to backend, authenticate user)
    console.log('Login form values:', { email, password });
    alert('Login successful!');
    dispatch(login({ email, password }));

    navigate('/home'); // Navigate to the dashboard page
  };

  return (
    <div className="login-container">
      <Typography.Title level={2}>Login</Typography.Title>

      <Form onFinish={handleLogin} className="login-form">
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item>
          <span>Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;