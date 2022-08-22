import React from 'react'
import Content from './Content'
import Dashboard from './Dashboard'

function Admin() {
  return (
    <Dashboard content={<Content />}></Dashboard>
  )
}

export default Admin