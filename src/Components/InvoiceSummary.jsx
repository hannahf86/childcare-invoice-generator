import React from 'react'

const InvoiceSummary = ({ childrenArray, familyName }) => (
    <div>
        <div className='invoice'>
            <div className="card-text">
                <p><strong>Name: </strong>{familyName}</p>
                <ul>
                    {childrenArray.map(child => (
                        <li key={child.id}>
                            <p>First Name: {child.name}</p>
                            <p>Age: {child.childsAge}</p>
                            <p>Hours per Week: {child.hoursPerWeek}</p>
                            <p>Funding: {child.funding}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)


export default InvoiceSummary