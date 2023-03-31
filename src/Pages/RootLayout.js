import React from 'react'
import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'
import { Container } from "react-bootstrap";
const RootLayout = () => {
  return (
    <Container>
      <SideBar/>
      
     
          <Outlet />
        
    </Container>
    
  )
}

export default RootLayout
