import React from 'react'
import Dashboard from '../Dashboard'
import ManageUSerTable from './ManageUserTable'

function ManageUser() {
    return (
        <React.Fragment>
            <Dashboard content={<ManageUSerTable/>} />
        </React.Fragment>
    )
}

export default ManageUser