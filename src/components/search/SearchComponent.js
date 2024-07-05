import React from 'react'
import { Input, Sea } from 'antd';
import './style.css'
import { SearchOutlined } from '@ant-design/icons';
import Dropdown from '../Dropdown/Dropdown';


const SearchComponent = ({ value, onChange, onFilterChange }) => {

    const handleInputChange = (event) => {
        onChange(event.target.value); 
    };

    return (
        <div >
            <div className='shop-serach-container'>
                <div>
                    <Input
                        classNames='input-search'
                        placeholder="Search"
                        value={value} 
                        onChange={handleInputChange}
                        prefix={<SearchOutlined style={{ color: '#A4ADAE' }}
                        />}
                    />
                </div>

                <Dropdown onFilterChange={onFilterChange} />

            </div>
        </div>
    )
}

export default SearchComponent
