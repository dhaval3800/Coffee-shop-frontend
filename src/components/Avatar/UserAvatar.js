import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserAvatar = ({ user }) => {
  const { name, avatar } = user;

  return (
    <Avatar
      size={40}
      icon={<UserOutlined />}
      src={avatar}
      alt={name}
      style={{ marginRight: '8px' }}
    />
  );
};

export default UserAvatar;