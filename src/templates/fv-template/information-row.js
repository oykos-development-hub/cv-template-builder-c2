export default function InformationRow(props) {
	let startDate = !!props.startDate ? props.startDate.slice(-4) : '';
	let endDate = !!props.endDate ? ' - ' + props.endDate.slice(-4) : '';
	let dateSpan = !!props.endDate ? (
		<span
			style={{
				minWidth: '90px',
			}}
		>
			{startDate}
			{endDate}
		</span>
	) : (
		<span
			style={{
				minWidth: '50px',
			}}
		>
			{startDate}
		</span>
	);
	return (
		<div className="content-item">
			{dateSpan}
			<div className="timeline">
				<div className="line"></div>
				<div className="point"></div>
			</div>
			<span>
				<span
					style={{
						fontWeight: 'bold',
					}}
				>
					{props.name}
				</span>
				<br />
				<span
					style={{
						fontWeight: 'normal',
						margin: '5px 0px',
						display: 'inline-block',
					}}
				>
					{props.description}
				</span>
			</span>
		</div>
	);
}
