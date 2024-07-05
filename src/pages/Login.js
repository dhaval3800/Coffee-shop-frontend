import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/features/auth/authThunk';
import { selectAuth,  } from '../redux/features/auth/authSlice';
import { getStoredAuthToken } from '../utils/authToken';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loading, isLoggedIn} = useSelector(selectAuth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getStoredAuthToken()

  useEffect(() => {
    if (isLoggedIn && token) {
      navigate('/home')
    }
  }, [navigate, isLoggedIn])

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
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
          <Button type="primary" loading={loading} htmlType="submit">
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