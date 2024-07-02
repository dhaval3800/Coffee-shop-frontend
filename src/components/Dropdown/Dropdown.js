import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import './style.css'

const DropdownMenu = () => {
    const items = [
        {
            label: <div >sort by Rating</div>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];

    return (
        <Dropdown menu={{ items }} trigger={['click']} placement='bottomLeft'>

            <a onClick={(e) => e.preventDefault()}>
                <div class='icon-container'>
                    <Space>
                        <i className="fi fi-rr-filter"
                            style={{ height: '20px', width: '22px', color: 'white' }}
                        ></i>
                    </Space>
                </div>
            </a>
        </Dropdown>
    )
}

export default DropdownMenu
