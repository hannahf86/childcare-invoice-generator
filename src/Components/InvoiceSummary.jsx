import React from 'react'

const InvoiceSummary = ({ childrenArray, familyName }) => (

    <div className='invoice'>
        <h3 className='card-family-name'><strong>Name: </strong>{familyName}</h3>
        <ul className="card-text">
            {childrenArray.map(child => (
                <li key={child.id} className='list-item'>
                    <p><strong>First Name: </strong>{child.name}</p>
                    <p><strong>Age: </strong>{child.childsAge}</p>
                    <p><strong>Hours per Week: </strong>{child.hoursPerWeek}</p>
                    <p><strong>Funding: </strong>{child.funding}</p>
                </li>
            ))}
        </ul>

    </div>

)


export default InvoiceSummary