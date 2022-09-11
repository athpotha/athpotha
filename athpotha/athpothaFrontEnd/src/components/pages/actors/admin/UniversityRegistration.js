import React from 'react'
import Dashboard from './Dashboard'
import UniversityRegistrationForm from './UniversityRegistrationForm'

function UniversityRegistration() {
    return (
        <React.Fragment>
            <Dashboard content={<UniversityRegistrationForm/>} />
        </React.Fragment>
    )
}

export default UniversityRegistration;