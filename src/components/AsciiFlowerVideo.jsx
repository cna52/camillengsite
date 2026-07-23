import { VideoAscii } from 'react-video-ascii';

const FLOWER_VIDEO_SRC = '/flowers.mp4';

function AsciiFlowerVideo({ className = '', compact = false }) {
  return (
    <VideoAscii
      src={FLOWER_VIDEO_SRC}
      className={className}
      videoMode={false}
      numColsRaw={compact ? 96 : 158}
      brightnessRaw={compact ? 1.34 : 1.06}
      saturationRaw={compact ? 1.28 : 1.12}
      bgOpacityRaw={compact ? 0.14 : 0.08}
      chars={compact ? ".,-_:;!+*ox/%#@" : " `.',-_:;!+*ox/%#@"}
      charMode="shape"
      cropFocus="center"
      mouseEffect={
        compact
          ? {
              style: 'brighten',
              radius: 0.06,
              duration: 0.8,
              trailLen: 10,
              trailDecay: 10,
              brightness: 1.65,
            }
          : {
              style: 'brighten',
              radius: 0.08,
              duration: 1,
              trailLen: 16,
              trailDecay: 10,
              brightness: 1.9,
            }
      }
      clickEffect={
        compact
          ? false
          : {
              style: 'ripple',
              brightness: 1.18,
              speed: 1.8,
            }
      }
      revealEffect={{
        type: 'random',
        duration: 0.45,
      }}
    />
  );
}

export default AsciiFlowerVideo;
