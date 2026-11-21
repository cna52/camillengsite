import { useEffect, useRef } from 'react';

const GLYPHS = '!<>-_\\/[]{}=+*^?#%@';
const FRAME_MS = 45;
const SETTLE_START_MS = 250;
const SETTLE_STEP_MS = 70;

function NameScramble({ text, id }) {
  const headingRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const heading = headingRef.current;
    const spans = lettersRef.current;
    let frameId = 0;
    let running = false;

    // lock each letter to its natural width so the name never jitters while glyphs swap
    const lockWidths = () => {
      if (running) return;
      spans.forEach((span) => { span.style.width = ''; });
      const widths = spans.map((span) => span.getBoundingClientRect().width);
      spans.forEach((span, index) => { span.style.width = `${widths[index]}px`; });
    };

    const scramble = () => {
      if (running || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      running = true;
      const start = performance.now();
      let lastSwap = 0;

      const tick = (now) => {
        const elapsed = now - start;
        const swap = now - lastSwap > FRAME_MS;
        let done = true;

        spans.forEach((span, index) => {
          const letter = text[index];
          if (letter === ' ') return;
          if (elapsed >= SETTLE_START_MS + index * SETTLE_STEP_MS) {
            span.textContent = letter;
            span.classList.remove('is-scrambling');
            return;
          }
          done = false;
          span.classList.add('is-scrambling');
          if (swap) span.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        });

        if (swap) lastSwap = now;
        if (done) {
          running = false;
          return;
        }
        frameId = requestAnimationFrame(tick);
      };

      frameId = requestAnimationFrame(tick);
    };

    let resizeFrame = 0;
    const handleResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(lockWidths);
    };

    document.fonts.ready.then(lockWidths);
    heading.addEventListener('mouseenter', scramble);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      cancelAnimationFrame(resizeFrame);
      heading.removeEventListener('mouseenter', scramble);
      window.removeEventListener('resize', handleResize);
    };
  }, [text]);

  return (
    <h1 ref={headingRef} id={id} className="hero__name" aria-label={text}>
      {[...text].map((letter, index) => (
        <span
          key={index}
          ref={(element) => { lettersRef.current[index] = element; }}
          className="hero__letter"
          aria-hidden="true"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
}

export default NameScramble;
