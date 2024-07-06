import React from 'react';
import { Dropdown, Space } from 'antd';
import './style.css';
import filterIcon from '../../assets/icons/filterIcon.svg'

const DropdownMenu = ({ onFilterChange }) => {
  const items = [
    {
      label: <div onClick={() => onFilterChange('rating')}>Sort by Rating</div>,
      key: '0',
    },
    {
      label: <div onClick={() => onFilterChange('reviews')}>Sort by Reviews</div>,
      key: '1',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']} placement='bottomLeft'>
      <a onClick={(e) => e.preventDefault()}>
        <div className='icon-container'>
          <Space>
           <img src={filterIcon} />
          </Space>
        </div>
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
