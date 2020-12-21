import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ContactLanguageSocialRow(props) {
	let link =
		!!props.social && !!props.value && props.value.slice(0, 3) !== 'htt'
			? 'https://' + props.value
			: props.value;
	let item = !!props.social ? (
		<a
			href={link}
			style={{
				textDecoration: 'none',
				color: 'unset',
			}}
		>
			{props.value}
		</a>
	) : (
		<span>{props.value}</span>
	);

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
						{item}
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
