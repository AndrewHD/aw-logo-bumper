import { 
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	interpolate
} from 'remotion';
import { Calendar } from './Calendar/Calendar';

const Text: React.FC<{
	top: number,
	left: number,
	fontSize: number,
	fgColor: string,
	text: string
}> = ({fgColor, top, left, fontSize, text}) => {
	const frame = useCurrentFrame();
	const textOpacity = interpolate(frame,[30, 60],[0,1]);
	return (
		<div style={{
			position: "absolute",
			top: top,
			left: left,
			color: fgColor,
			fontFamily: "Helvetica Neue",
			fontSize: fontSize,
			opacity: textOpacity
		}}>{text}</div>
	);
}
export const LogoBumper: React.FC<{
	fgColor: string;
	calWidth: number;
}> = ({fgColor, calWidth}) => {
	const videoConfig = useVideoConfig();
	const marginWide = (videoConfig.width - calWidth) / 2;
	const calHeight = calWidth * (5/7);
	const marginHigh = (videoConfig.height - calHeight) / 2;
	const fontSize = 76;
	const commonProps = {
		fgColor: fgColor,
		calWidth: calWidth,
		fontSize: fontSize
	};
	return (
		<AbsoluteFill>
			<Text top={marginHigh - fontSize - 3} left={marginWide + 6} text="ALTERNATE" {...commonProps} />
			<Calendar {...commonProps} />
			<Text top={marginHigh + calHeight - 3} left={marginWide} text="WEEKENDS" {...commonProps} />
		</AbsoluteFill>
	);
};
