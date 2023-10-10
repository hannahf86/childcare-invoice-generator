import React, { useRef, useEffect } from 'react'
import { useFetcher } from 'react-router-dom'

// ICONS
import { HiPlus } from 'react-icons/hi'

const AddHoursForm = ({ invoices }) => {
    const fetcher = useFetcher();
    const formRef = useRef();

    const focusRef = useRef();

    const isSubmitting = fetcher.state === 'submitting';

    // clears the form
    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting]);

    return (

        <div className='form-wrapper'>
            <h2 className='h3'>Add weekly hours for family: <span className='accent'>{invoices.length === 1 && `${invoices.map((invoice) => invoice.name)}`}</span></h2>


            <fetcher.Form
                method='post'
                className='grid-sm'
                ref={formRef}
            >

                <div className='grid-xs'>
                    <label htmlFor='hoursPerWeek'>Hours per week</label>
                    <input
                        type='number'
                        step='0.01'
                        name='hoursPerWeek'
                        id='hoursPerWeek'
                        placeholder='e.g. 24'
                        inputMode='decimal'
                        required
                        ref={focusRef} />
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

                <div className="grid-xs" hidden={invoices.length === 1}>
                    <label htmlFor='selectFamilyName'>Select Family Name</label>
                    <select name='selectFamilyName' id='selectFamilyName' required>
                        {
                            invoices
                                .sort((a, b) => a.createdAt - b.createdAt)
                                .map((invoice) => {
                                    return (
                                        <option key={invoice.id} value={invoice.id}>{invoice.name}</option>
                                    )
                                })
                        }
                    </select>
                </div>

                <input type='hidden' name='_action' value='addHours' />

                <button type='submit' className='btn btn--dark' disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Thinking...</span> :
                            <><HiPlus size={20} />Add Hours</>
                    }
                </button>

            </fetcher.Form>
        </div>

    )
}

export default AddHoursForm
