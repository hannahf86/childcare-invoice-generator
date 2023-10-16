import React from 'react'

const FamilyCard = ({ invoice }) => {
    const { id, childName, hours, funding, color } = invoice;

    return (
        <div className='budget'>
            <div className="progress-text">
                <p>Name: {childName}</p>
                <p>Hours this week: {hours}</p>
                <p>Funding applied: {funding}</p>
            </div>

        </div>
    )
}

export default FamilyCard
