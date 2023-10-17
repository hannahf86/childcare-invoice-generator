import React from 'react'

// HELPERS
import { formatCurrency } from '../Utilities/Helpers';

const ChildSummary = ({ child }) => {
    const { id, name, hoursPerWeek, funding, color } = child;

    return (
        <div className='invoice'
            style={{
                "--accent": color
            }}
        >
            <div className="card-text">
                <p><strong>Name: </strong>{name}</p>
                <p><strong>Hours this week: </strong>{hoursPerWeek} </p>
            </div>

            <div>
                <p><strong>Funding applied: </strong><br />{funding}</p>
            </div>

            <div className="card-text">
                <small>Total weekly amount: {formatCurrency}</small>
            </div>


        </div>
    )
}

export default ChildSummary
