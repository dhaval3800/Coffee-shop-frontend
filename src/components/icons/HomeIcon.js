import React from 'react'

const HomeIcon = ({ active = false }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.6 9.39999L12.6 2.39999L21.6 9.39999V20.4C21.6 20.9304 21.3893 21.4391 21.0142 21.8142C20.6391 22.1893 20.1304 22.4 19.6 22.4H5.6C5.06957 22.4 4.56086 22.1893 4.18578 21.8142C3.81071 21.4391 3.6 20.9304 3.6 20.4V9.39999Z" stroke={active ? 'white' : '#B7C1C2'} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.6 22.4V12.4H15.6V22.4" stroke={active ? 'white' : '#B7C1C2'} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default HomeIcon
