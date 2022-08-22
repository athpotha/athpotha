import React from 'react'
// import Content from './Content'
import Dashboard from '../Dashboard'
import WebActivityContent from './WebActivityContent'
function WebsiteActivity() {
  return (
    
    <React.Fragment>
            <Dashboard content={<WebActivityContent/>} />
        </React.Fragment>
  )
}

export default WebsiteActivity