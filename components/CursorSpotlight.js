import { useEffect, useRef } from 'react';

// Soft accent-tinted glow that follows the cursor. Desktop-only
// (mouse + fine pointer) and skipped for reduced-motion users.
const CursorSpotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reducedMotion) return;

    let raf = 0;
    const move = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (ref.current) {
          ref.current.style.background = `radial-gradient(500px at ${e.clientX}px ${e.clientY}px, rgba(241, 48, 36, 0.07), transparent 80%)`;
        }
      });
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className='fixed inset-0 pointer-events-none z-[60]'
      aria-hidden='true'
    />
  );
};

export default CursorSpotlight;
