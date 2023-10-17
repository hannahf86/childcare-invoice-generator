import React, { useEffect, useRef, useState } from 'react'
import { useFetcher } from 'react-router-dom'

// ASSETS
import { HiPlus } from 'react-icons/hi'


const AddChildForm = ({ familyName }) => {

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



    // --------------------------------
    // THE MATHS...

    const [childAge, setChildAge] = useState(0);
    const [funding, setFunding] = useState(" ");
    const [hours, setHours] = useState(0);
    const [rate, setRate] = useState(0);
    const [fundingHours, setFundingHours] = useState(0);

    useEffect(() => {
        if (childAge <= 2) {
            setRate(5.5);
        } else if (childAge <= 4) {
            setRate(5);
        } else {
            setRate(4.5);
        }
    }, [childAge]);

    useEffect(() => {
        if (funding === "2 year old, 15 hours funding") {
            setFundingHours(15);
        } else if (funding === "3 year old, 15 hours funding") {
            setFundingHours(15);
        } else if (funding === "3 year old, 30 hours funding") {
            setFundingHours(30);
        } else {
            setFundingHours(0);
        }
    }, [funding])


    const handleAge = (e) => {
        setChildAge(Number(e.target.value));
    };

    const handleFunding = (e) => {
        setFunding(e.target.value);
    };

    const handleHours = (e) => {
        setHours(Number(e.target.value));
    };

    const totalWeeklyHours = hours - fundingHours;
    const total = totalWeeklyHours * rate



    return (
        <div className='form-wrapper'>
            <h2 className='h3'>New Weekly Invoice for: <span className='accent'>
                {familyName.length === 1 && `${familyName.map((famName) => famName.familyName)}`}
            </span></h2>

            <fetcher.Form
                method='post'
                className='grid-sm'
                ref={formRef}
            >
                <div>
                    <div className='grid-xs'>
                        <label htmlFor='childName'>Child name</label>
                        <input
                            type='text'
                            name='addChild'
                            id='addChild'
                            placeholder='e.g. John'
                            required
                            ref={focusRef}
                        />
                    </div>

                    <div className='grid-xs'>
                        <label htmlFor='childsAge'>Child's Age</label>
                        <input
                            type='number'
                            step='1.00'
                            name='childsAge'
                            id='childsAge'
                            placeholder='e.g. 2'
                            required
                            onChange={handleAge} />
                    </div>

                    <div className='grid-xs'>
                        <label htmlFor='hoursPerWeek'>Hours per week</label>
                        <input
                            type='number'
                            step='0.50'
                            name='hoursPerWeek'
                            id='hoursPerWeek'
                            placeholder='e.g. 24'
                            inputMode='decimal'
                            required
                            onChange={handleHours} />
                    </div>

                    <div className='grid-xs'>
                        <label htmlFor='funding'>Select funding options</label>
                        <select
                            name='funding'
                            id='funding'
                            required
                            onChange={handleFunding} >
                            <option value="No funding">NONE</option>
                            <option value="2 year old, 15 hours funding">2yrs 15hrs</option>
                            <option value="3 year old, 15 hours funding">3yrs 15hrs</option>
                            <option value="3 year old, 30 hours funding">3yrs 30hrs</option>
                        </select>
                    </div>

                    <div className='grid-xs'>
                        <label htmlFor='selectedFamily'>Family Selected</label>
                        <select
                            name='selectedFamily'
                            id='selectedFamily'
                            required >

                            {/* FAMILY DROP-DOWN */}
                            {
                                familyName
                                    .sort((a, b) => a.createdAt - b.createdAt)
                                    .map((familyName) => {
                                        return (
                                            <option key={familyName.id} value={familyName.id}>
                                                {familyName.familyName}
                                            </option>
                                        )
                                    })
                            }
                        </select>
                    </div>
                </div>

                <div>
                    <h3 name='totalAmount' id='totalAmount'>Total amount for the week: £{total}</h3>
                </div>


                <input type='hidden' name='_action' value='addChild' />
                <button type='submit' className='btn btn--dark' disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Thinking...</span> :
                            <><HiPlus size={20} />Add Child</>
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddChildForm


