// Profile.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, EditOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';
import './profile.css'; // Custom CSS for styles

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const initialFormData = { ...formData }; // Store initial form data to reset on cancel

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      // Call your API to update user information
      // Example: await updateUser(formData);

      // Simulate success message
      message.success('Profile updated successfully');
      setEditing(false);
    } catch (error) {
      message.error('Failed to update profile');
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData); // Reset form data to initial values
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="user-profile-container">
        <h1>User Profile</h1>
    
      <div className="profile-content">
        <Form layout="vertical">
          <Form.Item label="First Name">
            {editing ? (
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                prefix={<UserOutlined />}
              />
            ) : (
              <span>{formData.firstName}</span>
            )}
          </Form.Item>
          <Form.Item label="Last Name">
            {editing ? (
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                prefix={<UserOutlined />}
              />
            ) : (
              <span>{formData.lastName}</span>
            )}
          </Form.Item>
          <Form.Item label="Email">
            {editing ? (
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                prefix={<UserOutlined />}
              />
            ) : (
              <span>{formData.email}</span>
            )}
          </Form.Item>
          <Form.Item label="Phone">
            {editing ? (
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                prefix={<UserOutlined />}
              />
            ) : (
              <span>{formData.phone}</span>
            )}
          </Form.Item>
        </Form>
      </div>
      <div className="profile-header">
        {editing ? (
          <>
            <Button type="primary" icon={<SaveOutlined />} onClick={handleSave} style={{ marginRight: '10px' }}>
              Save
            </Button>
            <Button icon={<CloseOutlined />} onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <Button icon={<EditOutlined />} onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Profile;
