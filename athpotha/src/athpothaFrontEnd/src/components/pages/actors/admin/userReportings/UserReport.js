import React from 'react'
import Dashboard from '../Dashboard'
import UserReportTable from './UserReportTable'


function UserReport() {
    return (
        <React.Fragment>
            <Dashboard content={<UserReportTable/>} />
        </React.Fragment>
    )
}

export default UserReport