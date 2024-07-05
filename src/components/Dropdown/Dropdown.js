import React from 'react';
import { Dropdown, Space } from 'antd';
import './style.css';

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
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="11" y1="4" x2="19" y2="4" stroke="white" stroke-width="2" stroke-linecap="round" />
              <line x1="1" y1="14" x2="9" y2="14" stroke="white" stroke-width="2" stroke-linecap="round" />
              <circle cx="4" cy="4" r="3" stroke="white" stroke-width="2" />
              <circle cx="16" cy="14" r="3" stroke="white" stroke-width="2" />
            </svg>
          </Space>
        </div>
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
