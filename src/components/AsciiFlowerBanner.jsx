import { useEffect, useRef, useState } from 'react';
import { VideoAscii } from 'react-video-ascii';

// show most of the real video behind the glyphs so it reads as flowers
const BG_OPACITY = 0.8;

const getColumns = () => {
  if (window.matchMedia('(max-width: 430px)').matches) return 80;
  if (window.matchMedia('(max-width: 767px)').matches) return 110;
  return 150;
};

function AsciiFlowerBanner() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [columns, setColumns] = useState(150);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReduceMotion(motionQuery.matches);
    const updateColumns = () => setColumns(getColumns());
    updateMotion();
    updateColumns();
    motionQuery.addEventListener('change', updateMotion);
    window.addEventListener('resize', updateColumns);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '160px' },
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      motionQuery.removeEventListener('change', updateMotion);
      window.removeEventListener('resize', updateColumns);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flower-banner"
      role="img"
      aria-label="ASCII art of flowers"
    >
      <VideoAscii
        src="/flowers.mp4"
        className="flower-banner__canvas"
        videoMode={false}
        numColsRaw={columns}
        brightnessRaw={1.06}
        saturationRaw={1.9}
        bgOpacityRaw={BG_OPACITY}
        chars=" `.',-_:;!+*ox/%#@"
        charMode="shape"
        cropFocus="center"
        paused={reduceMotion || !isVisible}
      />
    </div>
  );
}

export default AsciiFlowerBanner;
