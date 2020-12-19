export default function SkillsRow(props) {
	const oneCircle = (
		<div className="circles flex">
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle"></div>
			<div className="skills-circle"></div>
			<div className="skills-circle"></div>
			<div className="skills-circle"></div>
		</div>
	);
	const twoCircles = (
		<div className="circles flex">
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle"></div>
			<div className="skills-circle"></div>
			<div className="skills-circle"></div>
		</div>
	);
	const threeCircles = (
		<div className="circles flex">
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle"></div>
			<div className="skills-circle"></div>
		</div>
	);
	const fourCircles = (
		<div className="circles flex">
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle"></div>
		</div>
	);
	const fiveCircles = (
		<div className="circles flex">
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
			<div className="skills-circle bg-black"></div>
		</div>
	);

	const percentage = props.percent ? props.percent : 0;
	const percentageCircles = (percentage) => {
		switch (true) {
			case 0 < percentage && percentage <= 20:
				return [oneCircle];
				break;
			case 20 < percentage && percentage <= 40:
				return [twoCircles];
				break;
			case 40 < percentage && percentage <= 60:
				return [threeCircles];
				break;
			case 60 < percentage && percentage <= 80:
				return [fourCircles];
				break;
			case 80 < percentage && percentage <= 100:
				return [fiveCircles];
				break;
			default:
				return [oneCircle];
				break;
		}
	};
	return (
		<div
			className="content-item row justify-between w-100-perc border-box margin-v-2"
			style={{
				width: '75%',
			}}
		>
			<span
				style={{
					minWidth: '150px',
				}}
			>
				{props.name}
			</span>
			{percentageCircles(percentage)}
		</div>
	);
}
