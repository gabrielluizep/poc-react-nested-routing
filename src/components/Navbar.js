import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <header
        style={{
          maxWidth: '100vw',
          height: '64px',

          padding: '0 30px',
          margin: '0 0 100px 0',

          backgroundColor: '#44475a',
          boxShadow: '0px 0px 4px black',

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontWeight: 'bold' }}>Nested</h1>
        <nav>
          <NavLink
            to="welcome"
            activeClassName="active"
            style={{
              margin: '0 15px 0 0',
              fontWeight: 'bold',
              display: 'inline',
            }}
          >
            Welcome
          </NavLink>
          <NavLink
            to="profile"
            activeClassName="active"
            style={{
              margin: '0 15px 0 0',
              fontWeight: 'bold',
              display: 'inline',
            }}
          >
            Profile
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
