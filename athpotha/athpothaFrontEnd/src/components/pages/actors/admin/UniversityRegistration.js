import React from 'react'
import Dashboard from './Dashboard'
import UniversityRegistrationTable from './UniversityRegistrationTable'

function UniversityRegistration() {
    return (
        <React.Fragment>
            <Dashboard content={<UniversityRegistrationTable/>} />
        </React.Fragment>
    )
}

export default UniversityRegistration;