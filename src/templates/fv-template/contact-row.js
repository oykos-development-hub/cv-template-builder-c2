import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ContactRow(props) {
	return (
		<div className="content-item">
			<span
				style={{
					fontSize: '1.2em',
				}}
			>
				<FontAwesomeIcon
					icon={props.icon}
					size={props.size}
					color={props.color}
				/>
				<span
					style={{
						marginLeft: '10px',
					}}
				>
					{props.value}
				</span>
			</span>
		</div>
	);
}
