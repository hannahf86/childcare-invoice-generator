import React, { useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'

// ASSETS
import { HiPlus } from 'react-icons/hi'

const AddFamilyNameForm = () => {

    // stores the form's state
    const fetcher = useFetcher()

    // button delay
    const isSubmitting = fetcher.state === 'submitting'

    const formRef = useRef();

    // sets focus to first input
    const focusRef = useRef();

    // clears the form
    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])

    return (
        <div className='form-wrapper'>
            <h2 className='h3'>New Weekly Invoice</h2>
            <fetcher.Form
                method='post'
                className='grid-sm'
                ref={formRef}
            >
                <div className='grid-xs'>
                    <label htmlFor='newFamily'>Family Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='e.g. Smith'
                        required
                        ref={focusRef} />
                </div>

                <div className='grid-xs'>
                    <label htmlFor='childName'>Child name</label>
                    <input
                        type='text'
                        name='childName'
                        id='childName'
                        placeholder='e.g. John'
                        required
                        ref={focusRef} />
                </div>

                <div className='grid-xs'>
                    <label htmlFor='hoursPerWeek'>Hours per week</label>
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
                    <label htmlFor='funding'>Select funding options</label>
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

                <button type='submit' className='btn btn--dark' disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Thinking...</span> :
                            <><HiPlus size={20} />Add Family</>
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddFamilyNameForm
