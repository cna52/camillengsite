import { useEffect, useState } from 'react';
import useAnimationActivity from '../hooks/useAnimationActivity';

function TerminalTypewriter({
  phrases,
  ariaLabel,
  typeDelay = 55,
  deleteDelay = 30,
  holdDelay = 2800,
  gapDelay = 450,
  completionDelay = 1000,
  loop = true,
  className = '',
}) {
  const { elementRef, entryCycle, isActive, reduceMotion } = useAnimationActivity();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    if (reduceMotion) return;

    setText('');
    setPhraseIndex(0);
    setPhase('typing');
  }, [entryCycle, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      setText(phrases[0]);
      setPhraseIndex(0);
      setPhase('complete');
      return undefined;
    }

    if (!isActive) return undefined;
    if (phase === 'complete') return undefined;

    const phrase = phrases[phraseIndex];
    let delay = typeDelay;

    if (phase === 'holding') delay = holdDelay;
    if (phase === 'deleting') delay = deleteDelay;
    if (phase === 'gap') delay = gapDelay;
    if (phase === 'finishing') delay = completionDelay;

    const timer = window.setTimeout(() => {
      if (phase === 'typing') {
        const nextText = phrase.slice(0, text.length + 1);
        setText(nextText);
        if (nextText === phrase) setPhase(loop ? 'holding' : 'finishing');
        return;
      }

      if (phase === 'finishing') {
        setPhase('complete');
        return;
      }

      if (phase === 'holding') {
        setPhase('deleting');
        return;
      }

      if (phase === 'deleting') {
        const nextText = text.slice(0, -1);
        setText(nextText);
        if (!nextText) setPhase('gap');
        return;
      }

      setPhraseIndex((current) => (current + 1) % phrases.length);
      setPhase('typing');
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    deleteDelay,
    completionDelay,
    gapDelay,
    holdDelay,
    entryCycle,
    isActive,
    loop,
    phase,
    phraseIndex,
    phrases,
    reduceMotion,
    text,
    typeDelay,
  ]);

  return (
    <span ref={elementRef} className={`terminal-typewriter ${className}`.trim()}>
      <span aria-hidden="true">{text}</span>
      {!reduceMotion && phase !== 'complete' && (
        <span
          className={`terminal-cursor ${isActive ? '' : 'is-paused'}`.trim()}
          aria-hidden="true"
        />
      )}
      <span className="sr-only">{ariaLabel || phrases.join(', ')}</span>
    </span>
  );
}

export default TerminalTypewriter;
