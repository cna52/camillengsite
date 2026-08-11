import { useEffect, useState } from 'react';
import useAnimationActivity from '../hooks/useAnimationActivity';

function TerminalPrintGroup({
  className = '',
  initialDelay = 0,
  children,
  ...props
}) {
  const { elementRef, isVisible, reduceMotion } = useAnimationActivity();
  const [hasPrinted, setHasPrinted] = useState(false);

  useEffect(() => {
    if (isVisible || reduceMotion) setHasPrinted(true);
  }, [isVisible, reduceMotion]);

  return (
    <div
      ref={elementRef}
      className={`terminal-print-group ${hasPrinted || isVisible || reduceMotion ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--print-delay': `${initialDelay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

export default TerminalPrintGroup;
