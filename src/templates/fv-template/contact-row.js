import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ContactLanguageSocialRow(props) {
	if (!!props.value) {
		return (
			<div className="content-item">
				<span
					style={{
						fontSize: '1.2em',
						whiteSpace: 'nowrap',
						maxWidth: '100%',
						overflow: 'hidden',
					}}
				>
					<FontAwesomeIcon
						icon={props.icon}
						size={props.size}
						color={props.color}
						fixedWidth={true}
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
	} else if (!!props.language) {
		return (
			<div className="content-item">
				<span
					style={{
						fontSize: '1.2em',
						whiteSpace: 'nowrap',
						maxWidth: '100%',
						overflow: 'hidden',
					}}
				>
					<span
						style={{
							display: 'inline-block',
							width: '130px',
						}}
					>
						{props.language}
					</span>
					<span
						style={{
							marginLeft: '10px',
						}}
					>
						{props.level}
					</span>
				</span>
			</div>
		);
	} else {
		return null;
	}
}
