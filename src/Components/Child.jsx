import React from 'react'

const Child = ({ invoice }) => {
    const { id, name, childName, hours, funding, color } = invoice;

    return (
        <div className='budget'>
            <div className="progress-text">
                <h3>Family name: {name}</h3>
                <p>{childName}</p>
                <p>{hours}</p>
                <p>{funding}</p>
            </div>

        </div>
    )
}

export default Child
