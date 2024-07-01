import React from 'react'
import { Input, Sea } from 'antd';
import './style.css'
import { SearchOutlined } from '@ant-design/icons';


const SearchComponent = () => {
    return (
        <div >
            <div style={{ display: 'flex' }}>
                <div style={{paddingRight:'10px'}}>
                    <Input
                        placeholder="Search"
                        prefix={<SearchOutlined style={{ color: '#A4ADAE' }} />}
                    />
                </div>
                <div class='icon-container'>
                    <i className="fi fi-rr-filter"
                        style={{ height: '20px', width: '22px', color:'white' }}
                    ></i>
                </div>
            </div>
        </div>
    )
}

export default SearchComponent
