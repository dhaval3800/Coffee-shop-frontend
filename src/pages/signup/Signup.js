import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import api from '../../utils/api';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post('signup', { email, password, name });
      navigate('/login');
    } catch (err) {
      console.log("🚀 ~ file: Signup.js:20 ~ handleSubmit ~ err:", err)
      message.error(err)
    }
  };

  return (
    <div className="signup-container">

      <Form onFinish={handleSubmit} className="signup-form">
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
        <Form.Item>
          <span>Already have an account? </span>
          <Link to="/login">Login Here</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;