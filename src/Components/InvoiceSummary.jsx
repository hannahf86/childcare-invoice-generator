const InvoiceSummary = ({ childrenArray, familyName }) => {
	const getRate = age => {
		if (age <= 2) {
			return 5.5;
		} else if (age <= 4) {
			return 5;
		} else {
			return 4.5;
		}
	};

	const getFunding = funding => {
		if (funding === '2 year old, 15 hours funding') {
			return 15;
		} else if (funding === '3 year old, 15 hours funding') {
			return 15;
		} else if (funding === '3 year old, 30 hours funding') {
			return 30;
		} else {
			return 0;
		}
	};

	return (
		<div className='invoice'>
			<h3 className='card-family-name'>
				<strong>Name: </strong>
				{familyName}
			</h3>
			<ul className='card-text'>
				{childrenArray.map(child => {
					const rate = getRate(child.childsAge);
					const funding = getFunding(child.funding);
					const total = funding * rate;
					return (
						<li key={child.id} className='list-item'>
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
								<strong>Total: </strong>
								{total}
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default InvoiceSummary;
