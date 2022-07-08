import {
	interpolate,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

export const Day: React.FC<{
	left: string,
	fgColor: string,
	direction: string
	short: boolean,
	calHeight: number,
	marginHigh: number
}> = ({left, fgColor, direction, calHeight, short = false}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	let marginHigh = (videoConfig.height - calHeight) / 2;
	if (short) {
		if (direction == "bottom") { marginHigh = marginHigh + (calHeight * (1/5)) - 7; }
		calHeight = calHeight * (4/5) + 7; 
	}
	const interHeight = interpolate(frame, [0, 15, 30], [0, calHeight + marginHigh, calHeight],{ extrapolateRight: 'clamp' });
	const interTB = interpolate(frame, [0, 15, 30], [0, 0, marginHigh], { extrapolateRight: 'clamp' });
	let dayStyle = {
		position: "absolute",
		left: left,
		backgroundColor: fgColor,
		height: interHeight,
		width: 7
	};
	dayStyle[direction] = interTB;

	return (
		<div style={dayStyle}></div>
	);
}