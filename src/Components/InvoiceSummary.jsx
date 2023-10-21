import React from 'react'

const InvoiceSummary = ({ child }) => {
    const { familyNameId, name, hoursPerWeek, funding } = child;

    return (
        <div >
            {
                familyNameId === familyNameId ? (
                    <div className='invoice'>
                        <div className="card-text">
                            <p><strong>Name: </strong>{name}</p>
                            <p><strong>Hours this week: </strong>{hoursPerWeek} </p>
                        </div>

                        <div>
                            <p><strong>Funding applied: </strong><br />{funding}</p>
                        </div>
                    </div>
                ) : (
                    <div className='invoice-alt'>
                        <div className="card-text">
                            <p><strong>Name: </strong>{name}</p>
                            <p><strong>Hours this week: </strong>{hoursPerWeek} </p>
                        </div>

                        <div>
                            <p><strong>Funding applied: </strong><br />{funding}</p>
                        </div>
                    </div>
                )
            }
        </div>

    )
}


export default InvoiceSummary
