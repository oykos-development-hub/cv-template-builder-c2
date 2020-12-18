export default function InformationRow(props) {
	return (
		<div className="content-item">
			<span>
				{props.startDate.slice(-4)} -{props.endDate.slice(-4)}
			</span>
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
