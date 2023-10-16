import React, { useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'

const AddFamilyForm = () => {


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
            <div className='grid-xs'>
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
                            ref={focusRef}
                        />
                    </div>
                </fetcher.Form>
            </div>

        </div>
    )
}

export default AddFamilyForm
