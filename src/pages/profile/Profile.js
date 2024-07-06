// Profile.js
import React, { useState } from 'react';
import { Form, Input, message, Avatar, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './profile.css'; // Custom CSS for styles
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, updateUser } from '../../redux/features/auth/authSlice';
import { getAvatarText } from '../../utils/helper';
import api from '../../utils/api';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const { user: currentUser } = useSelector(selectAuth)
  console.log("🚀 ~ file: Profile.js:12 ~ Profile ~ currentUser:", currentUser)
  const [formData, setFormData] = useState(currentUser);
  const dispatch = useDispatch()
  console.log("🚀 ~ file: Profile.js:16 ~ Profile ~ formData:", formData)

  const initialFormData = { ...formData };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    const body = {
      name: formData.name,
    }
    if (formData.password && formData.password.trim() !== '') {
      body.password = formData.password;
    }
    try {
      api.patch('me',body)
      dispatch(updateUser(formData.name))
      message.success('Profile updated successfully');
      setEditing(false);
    } catch (error) {
      message.error(error? error: 'Failed to update profile');
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>

      <div className="profile-content">
        <div className="avatar-container">
          <Avatar size={100} >{getAvatarText(currentUser?.name)} </Avatar>
        </div>
        <Form layout="vertical">
          <Form.Item label="Name">
            {editing ? (
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                prefix={<UserOutlined />}
              />
            ) : (
              <span>{formData.name}</span>
            )}
          </Form.Item>
          {!editing && (
            <Form.Item label="Email">

              <span>{formData.email}</span>
            </Form.Item>
          )}
          {editing && (
            <Form.Item label="New Password">
              <Input.Password
                name="password"
                value={formData?.password}
                onChange={handleChange}
                prefix={<LockOutlined />}
              />
            </Form.Item>
          )}
        </Form>
      </div>
      <div className="profile-buttons-wrap">
        {editing ? (
          <div>
            <Button onClick={handleSave} style={{ marginRight: '10px' }}>
              Save
            </Button>
            <Button onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Profile;
