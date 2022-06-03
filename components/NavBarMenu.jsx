import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const NavBarMenu = () => {
  return (
    <div>
        <Navbar className="bg-dark">
            <Navbar.Brand className='text-white'>My app</Navbar.Brand>
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/posts">Posts</Nav.Link>
            </Nav.Item>
        </Navbar>
    </div>
  )
}

export default NavBarMenu