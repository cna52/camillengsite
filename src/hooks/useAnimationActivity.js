import { useEffect, useRef, useState } from 'react';

function getReducedMotionPreference() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function useAnimationActivity() {
  const elementRef = useRef(null);
  const wasVisibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [entryCycle, setEntryCycle] = useState(0);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const [reduceMotion, setReduceMotion] = useState(getReducedMotionPreference);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (event) => setReduceMotion(event.matches);
    const handleVisibilityChange = () => setPageVisible(!document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextVisible = entry.isIntersecting;

        if (nextVisible && !wasVisibleRef.current) {
          setEntryCycle((current) => current + 1);
        }

        wasVisibleRef.current = nextVisible;
        setIsVisible(nextVisible);
      },
      { threshold: 0.1 },
    );

    motionQuery.addEventListener('change', handleMotionChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return {
    elementRef,
    entryCycle,
    isVisible,
    isActive: isVisible && pageVisible && !reduceMotion,
    reduceMotion,
  };
}

export default useAnimationActivity;
