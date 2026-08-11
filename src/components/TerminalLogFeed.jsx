import { useEffect, useState } from 'react';
import useAnimationActivity from '../hooks/useAnimationActivity';

const messages = [
  { status: 'init', text: 'resolving camille.ng' },
  { status: 'ok', text: 'secure connection established' },
  { status: 'ok', text: 'identity verified' },
  { status: 'ready', text: 'select a contact channel' },
];

function TerminalLogFeed() {
  const { elementRef, entryCycle, isActive, reduceMotion } = useAnimationActivity();
  const [isBooting, setIsBooting] = useState(true);
  const [bootLine, setBootLine] = useState(0);
  const [bootText, setBootText] = useState(() => messages.map(() => ''));

  useEffect(() => {
    if (reduceMotion) return;

    setIsBooting(true);
    setBootLine(0);
    setBootText(messages.map(() => ''));
  }, [entryCycle, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      setIsBooting(false);
      return undefined;
    }

    if (!isActive || !isBooting) return undefined;

    const target = messages[bootLine].text;
    const currentText = bootText[bootLine];
    const lineComplete = currentText === target;
    const isLastLine = bootLine === messages.length - 1;
    const delay = lineComplete ? (isLastLine ? 420 : 220) : 34;

    const timer = window.setTimeout(() => {
      if (!lineComplete) {
        setBootText((current) => current.map((text, index) => (
          index === bootLine ? target.slice(0, text.length + 1) : text
        )));
        return;
      }

      if (!isLastLine) {
        setBootLine((current) => current + 1);
        return;
      }

      setIsBooting(false);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [bootLine, bootText, isActive, isBooting, reduceMotion]);

  return (
    <div ref={elementRef} className="terminal-log">
      <div className="terminal-log__visual" aria-hidden="true">
        {isBooting ? (
          messages.slice(0, bootLine + 1).map(({ status }, index) => (
            <p key={`${entryCycle}-boot-${index}`} className="terminal-log__line">
              <span>[{status}]</span> {bootText[index]}
              {index === bootLine && (
                <span className={`terminal-cursor ${isActive ? '' : 'is-paused'}`.trim()} />
              )}
            </p>
          ))
        ) : (
          messages.map(({ status, text }, index) => (
            <p key={`${status}-${text}`} className="terminal-log__line">
              <span>[{status}]</span> {text}
              {index === messages.length - 1 && !reduceMotion && (
                <span className={`terminal-cursor ${isActive ? '' : 'is-paused'}`.trim()} />
              )}
            </p>
          ))
        )}
      </div>
      <p className="sr-only">
        Secure connection established. Identity verified. Contact channels are available.
      </p>
    </div>
  );
}

export default TerminalLogFeed;
