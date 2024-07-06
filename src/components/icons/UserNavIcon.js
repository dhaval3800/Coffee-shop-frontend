import React from 'react'

const UserNavIcon = ({ active = false }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 21V19C20.5 17.9391 20.0786 16.9217 19.3284 16.1716C18.5783 15.4214 17.5609 15 16.5 15H8.5C7.43913 15 6.42172 15.4214 5.67157 16.1716C4.92143 16.9217 4.5 17.9391 4.5 19V21" stroke={active ? 'white' : '#B7C1C2'} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11Z" stroke={active ? 'white' : '#B7C1C2'} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default UserNavIcon
