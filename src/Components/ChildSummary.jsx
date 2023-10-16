import React from 'react'



const ChildSummary = ({ family }) => {
    const { name, hoursPerWeek, funding, color } = family;

    return (
        <div className='invoice'
            style={{
                "--accent": color
            }}
        >
            <div className="card-text">
                <p><strong>Name: </strong>{name}</p>
                <p><strong>Hours this week:</strong>{hoursPerWeek} </p>
            </div>

            <div>
                <p><strong>Funding applied: </strong><br />{funding}</p>
            </div>


        </div>
    )
}

export default ChildSummary
