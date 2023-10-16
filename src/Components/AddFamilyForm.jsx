import React, { useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'

// ICONS
import { HiPlus } from 'react-icons/hi'

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
                    <div className='invoice-inputs'>
                        <div className='grid-xs'>
                            <label htmlFor='familyName'>Family Name</label>
                            <input
                                type='text'
                                name='familyName'
                                id='familyName'
                                placeholder='e.g. Smith'
                                required
                                ref={focusRef}
                            />
                        </div>
                    </div>

                    {/* NEW USER SECRET INPUT */}
                    <input type="hidden" name="_action" value="familyName" />

                    <button type='submit' className='btn btn--dark' disabled={isSubmitting}>
                        {
                            isSubmitting ? <span>Thinking...</span> :
                                <><HiPlus size={20} />Add Family</>
                        }
                    </button>
                </fetcher.Form>
            </div>

        </div>
    )
}

export default AddFamilyForm
