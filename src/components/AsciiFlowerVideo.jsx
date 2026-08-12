import { VideoAscii } from 'react-video-ascii';
import { useEffect, useRef, useState } from 'react';

const FLOWER_VIDEO_SRC = '/flowers.mp4';

function AsciiFlowerVideo({ className = '' }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [compactViewport, setCompactViewport] = useState(false);
  const [narrowViewport, setNarrowViewport] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const viewportQuery = window.matchMedia('(max-width: 767px)');
    const narrowViewportQuery = window.matchMedia('(max-width: 430px)');
    const updateMotionPreference = () => setReduceMotion(motionQuery.matches);
    const updateViewportPreference = () => setCompactViewport(viewportQuery.matches);
    const updateNarrowViewportPreference = () => setNarrowViewport(narrowViewportQuery.matches);
    updateMotionPreference();
    updateViewportPreference();
    updateNarrowViewportPreference();
    motionQuery.addEventListener('change', updateMotionPreference);
    viewportQuery.addEventListener('change', updateViewportPreference);
    narrowViewportQuery.addEventListener('change', updateNarrowViewportPreference);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '160px' },
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      motionQuery.removeEventListener('change', updateMotionPreference);
      viewportQuery.removeEventListener('change', updateViewportPreference);
      narrowViewportQuery.removeEventListener('change', updateNarrowViewportPreference);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {reduceMotion || !isVisible ? (
        <img className="ascii-flower-fallback" src="/botanical-lily-accent.webp" alt="" />
      ) : (
        <VideoAscii
          src={FLOWER_VIDEO_SRC}
          className={`${className}__canvas`}
          videoMode={false}
          numColsRaw={narrowViewport ? 96 : compactViewport ? 120 : 220}
          brightnessRaw={1.06}
          saturationRaw={1.9}
          bgOpacityRaw={0.08}
          chars=" `.',-_:;!+*ox/%#@"
          charMode="shape"
          cropFocus="center"
          mouseEffect={compactViewport ? undefined : {
            style: 'brighten',
            radius: 0.06,
            duration: 1.25,
            trailLen: 22,
            trailDecay: 8,
            brightness: 3.2,
          }}
          clickEffect={compactViewport ? undefined : {
            style: 'ripple',
            brightness: 1.45,
            speed: 2.25,
          }}
          revealEffect={{ type: 'random', duration: 0.45 }}
        />
      )}
    </div>
  );
}

export default AsciiFlowerVideo;
