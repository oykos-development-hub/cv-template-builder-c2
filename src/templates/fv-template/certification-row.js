export default function CertificationRow(props) {
	return (
		<div className="content-item">
			<div className="row  align-center">
				<div
					style={{
						height: '10px',
						width: '10px',
						backgroundColor: 'white',
						borderRadius: '50%',
						border: '2px solid #2c2c2c',
						display: 'flex',
						marginRight: '20px',
					}}
				></div>

				<span>
					<span
						style={{
							fontWeight: 'bold',
						}}
					>
						{props.certificate}
					</span>
					<br />
					<span
						style={{
							fontWeight: 'normal',
							margin: '5px 0px',
							display: 'inline-block',
						}}
					>
						<span>
							{props.expertise} |
							<span className=""> {props.issuedBy}</span>
						</span>
					</span>
				</span>
			</div>
		</div>
	);
}
