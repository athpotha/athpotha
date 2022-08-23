import React from 'react'
import Dashboard from './Dashboard'
import UniversityRegistrationForm from './UniversityRegistrationForm'

function UniversityRegistration() {
  return (
    <Dashboard content={<UniversityRegistrationForm />} />
  )
}

export default UniversityRegistration