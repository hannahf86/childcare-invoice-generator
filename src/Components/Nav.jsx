import React from 'react'

// REACT-ROUTER-DOM
import { Form, NavLink } from 'react-router-dom'

// ASSETS
import logo from '../Assets/logo.png'
import { HiTrash } from 'react-icons/hi'

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
        to='/'
        aria-label='Go to Home'
      >
        <img src={logo} height={40} />
        <span>Childcare Invoice Generator</span>
      </NavLink>

      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type='submit' className='btn btn--warning'>
              <span>Delete User</span>
            </button>

          </Form>
        )
      }

    </nav>
  )
}

export default Nav
