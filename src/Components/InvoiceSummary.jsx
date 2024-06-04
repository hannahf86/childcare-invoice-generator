import React from "react";
import { useEffect } from "react";
// --------------------------------
// THE MATHS...

// const total = totalWeeklyHours * rate;

// useEffect(() => {
//     if (childsAge <= 2) {
//         setRate(5.5);
//     } else if (childsAge <= 4) {
//         setRate(5);
//     } else {
//         setRate(4.5);
//     }
// }, [childsAge]);

// useEffect(() => {
//     if (funding === "2 year old, 15 hours funding") {
//         setFundingHours(15);
//     } else if (funding === "3 year old, 15 hours funding") {
//         setFundingHours(15);
//     } else if (funding === "3 year old, 30 hours funding") {
//         setFundingHours(30);
//     } else {
//         setFundingHours(0);
//     }
// }, [funding])

const childTotal = document.getElementById("AddChildForm.totalAmount");

const InvoiceSummary = ({}) => {
  return (
    <div className="invoice">
      <h3 className="card-family-name">
        <strong>Name: </strong>
        {familyName}
      </h3>
      <ul className="card-text">
        {childrenArray.map((child) => (
          <li key={child.id} className="list-item">
            <p>
              <strong>First Name: </strong>
              {child.name}
            </p>
            <p>
              <strong>Age: </strong>
              {child.childsAge}
            </p>
            <p>
              <strong>Hours per Week: </strong>
              {child.hoursPerWeek}
            </p>
            <p>
              <strong>Funding: </strong>
              {child.funding}
            </p>
            <p>
              <strong>Total:</strong>
              {childTotal}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceSummary;
