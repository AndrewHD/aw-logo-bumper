import {
	interpolate,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

export const Week: React.FC<{
	top: string,
	fgColor: string,
	direction: string
	short: boolean,
	calWidth: number,
	marginWide: number
}> = ({top, fgColor, direction, marginWide, calWidth, short = false}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	if (short) {
		marginWide = marginWide + (calWidth * (4/7)) - 7;
		calWidth = (calWidth * (3/7)) + 7; 
	}
	const interWidth = interpolate(frame, [0, 15, 30], [0, calWidth + marginWide, calWidth],{ extrapolateRight: 'clamp' });
	const interLR = interpolate(frame, [0, 15, 30], [0, 0, marginWide], { extrapolateRight: 'clamp' });
	let weekStyle = {
		position: "absolute",
		top: top,
		backgroundColor: fgColor,
		width: interWidth,
		height: 7
	};
	weekStyle[direction] = interLR;

	return (
		<div style={weekStyle}></div>
	);
}