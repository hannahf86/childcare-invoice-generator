import React from 'react'
import { Form } from 'react-router-dom'

// ASSETS
import { HiCurrencyPound } from 'react-icons/hi'

const AddHoursForm = () => {
    return (
        <div className='form-wrapper'>
            <h2 className='h3'>New Weekly Invoice</h2>
            <Form method='post'
                className='grid-sm'
            >
                <div className='grid-xs'>
                    <label htmlFor='newHours'>Child Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='David'
                        required />
                </div>

                <div className='grid-xs'>
                    <label htmlFor='newHours'>Hours per week</label>
                    <input
                        type='number'
                        step='0.01'
                        name='hoursPerWeek'
                        id='hoursPerWeek'
                        placeholder='e.g. 24'
                        inputMode='decimal'
                        required />
                </div>

                <div className='grid-xs'>
                    <label htmlFor='newHours'>Select funding options</label>
                    <select
                        name='funding'
                        id='funding'
                        required >
                        <option value="2 year old, 15 hours funding">2yrs 15hrs</option>
                        <option value="3 year old, 15 hours funding">3yrs 15hrs</option>
                        <option value="3 year old, 30 hours funding">3yrs 30hrs</option>
                        <option value="No funding">NONE</option>
                    </select>
                </div>

                <input type='hidden' name='_action' value='createInvoice' />

                <button type='submit' className='btn btn--dark'>
                    <HiCurrencyPound />Add Child
                </button>
            </Form>
        </div>
    )
}

export default AddHoursForm
