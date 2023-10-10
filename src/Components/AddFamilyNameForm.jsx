import React, { useEffect, useRef } from 'react'
import { Form, useFetcher } from 'react-router-dom'

// ASSETS
import { HiPlus } from 'react-icons/hi'

const AddFamilyNameForm = () => {

    // stores the form's state
    const fetcher = useFetcher()
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
