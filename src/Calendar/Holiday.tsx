import {
	useCurrentFrame,
	interpolate
} from 'remotion';

export const Holiday: React.FC<{
	top: number,
	side: string,
	fgColor: string,
	marginWide: number,
	calWidth: number
}> = ({top, side, fgColor, marginWide, calWidth}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 60], [0, 0.5], {extrapolateRight: 'clamp'});
	let holidayStyle = {
		position: "absolute",
		top: top,
		opacity: opacity,
		backgroundColor: fgColor,
		height: calWidth/7,
		width: calWidth/7
	}
	holidayStyle[side] = marginWide;
	return(
		<div style={holidayStyle}></div>
	)
}