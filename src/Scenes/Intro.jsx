import React from 'react'
import { Form } from 'react-router-dom'

// ASSETS
import { HiUserAdd } from 'react-icons/hi'

const Intro = () => {
    return (
        <div className='intro'>
            <div>
                <h1>Make invoicing <span className='accent'>work for you</span></h1>
            </div>
            <p>Personal invoicing service for childcare providers</p>

            <Form method='post' >
                <input
                    type='text'
                    name='userName'
                    required
                    placeholder='Enter your name'
                    aria-label='Your name'
                    autoComplete='given-name'
                />
                
                {/* NEW USER SECRET INPUT */}
                <input type='hidden' name='_action' value='newUser' />

                <button type='submit' className='btn btn--dark'>
                    <HiUserAdd width={20} /><span>Create Account</span>
                </button>
            </Form>
        </div>
    )
}

export default Intro
