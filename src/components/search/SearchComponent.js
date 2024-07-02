import React from 'react'
import { Input, Sea } from 'antd';
import './style.css'
import { SearchOutlined } from '@ant-design/icons';
import Dropdown from '../Dropdown/Dropdown';


const SearchComponent = ({ value, onChange }) => {

    const handleInputChange = (event) => {
        onChange(event.target.value); // Pass the new search term to the parent component
    };

    return (
        <div >
            <div style={{ display: 'flex' }}>
                <div style={{ paddingRight: '10px' }}>
                    <Input
                        placeholder="Search"
                        value={value} // Set the value prop from parent component
                        onChange={handleInputChange}
                        prefix={<SearchOutlined style={{ color: '#A4ADAE' }}
                        />}
                    />
                </div>

                <Dropdown />

            </div>
        </div>
    )
}

export default SearchComponent
