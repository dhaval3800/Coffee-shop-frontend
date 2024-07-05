import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserAvatar = ({ user }) => {
  const { name, avatar } = user;

  return (
    <Avatar
      size={50}
      icon={<UserOutlined />}
      src={avatar}
      alt={name}
      // style={{ width:'50px',height:'50px'}}
    />
  );
};

export default UserAvatar;