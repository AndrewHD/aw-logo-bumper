import {Composition} from 'remotion';
import {LogoBumper} from './LogoBumper';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="LogoBumper"
				component={LogoBumper}
				durationInFrames={60}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					fgColor: "black",
					calWidth: 418
				}}
			/>
		</>
	);
};
