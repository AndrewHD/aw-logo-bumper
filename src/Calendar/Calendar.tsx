import {
	useVideoConfig
} from 'remotion';

import { Week } from './Week';
import { Day } from './Day';
import { Holiday } from './Holiday';

export const Calendar: React.FC<{
	fgColor: string,
	calWidth: number
}> = ({fgColor, calWidth}) => {
	const videoConfig = useVideoConfig();
	const marginWide = (videoConfig.width - calWidth) / 2;
	const calHeight = calWidth * (5/7);
	const marginHigh = (videoConfig.height - calHeight) / 2;
	const cols = Array(8).fill().map((v,i) => (i*(calWidth/7)) + marginWide);
	const rows = Array(6).fill().map((v,i) => (i*(calHeight/5)) + marginHigh);
	const commonProps = {
		fgColor: fgColor,
		marginWide: marginWide,
		calWidth: calWidth,
		calHeight: calHeight
	};
	return (
		<div>
			<Day left={cols[0]} direction="bottom" {...commonProps} />
			<Day left={cols[1]} direction="top" {...commonProps} />
			<Day left={cols[2]} direction="bottom" {...commonProps} />
			<Day left={cols[3]} direction="top" {...commonProps} />
			<Day left={cols[4]} direction="bottom" {...commonProps} short={true} />
			<Day left={cols[5]} direction="top" {...commonProps} short={true} />
			<Day left={cols[6]} direction="bottom" {...commonProps} short={true} />
			<Day left={cols[7]} direction="top" {...commonProps} short={true} />
			<Week top={rows[0]} direction="left" {...commonProps} />
			<Holiday top={rows[0]} side="left" {...commonProps} />
			<Week top={rows[1]} direction="right" {...commonProps} />
			<Holiday top={rows[1]} side="right" {...commonProps} />
			<Week top={rows[2]} direction="left" {...commonProps} />
			<Holiday top={rows[2]} side="left" {...commonProps} />
			<Week top={rows[3]} direction="right" {...commonProps} />
			<Holiday top={rows[3]} side="right" {...commonProps} />
			<Week top={rows[4]} direction="left" {...commonProps} />
			<Holiday top={rows[4]} side="left" {...commonProps} />
			<Week top={rows[5]} direction="right" {...commonProps} short={true} />
		</div>
	);
};