import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ─── Pixel heart maps (11 cols × 9 rows) ───────────────────────────────────
// Outline-only: just the border pixels
const OUTLINE: number[][] = [
  [0,0,1,1,0,0,0,1,1,0,0],
  [0,1,0,0,1,0,1,0,0,1,0],
  [1,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [0,1,0,0,0,0,0,0,0,1,0],
  [0,0,1,0,0,0,0,0,1,0,0],
  [0,0,0,1,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0],
];

// Fully filled (outline + interior)
const FILLED: number[][] = [
  [0,0,1,1,0,0,0,1,1,0,0],
  [0,1,1,1,1,0,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0],
];

const PIXEL = 8;   // px per pixel cell
const COLS  = 11;
const ROWS  = 9;

// ─── Single pixel heart ────────────────────────────────────────────────────
function PixelHeart({ filled }: { filled: boolean }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${COLS}, ${PIXEL}px)`,
        gridTemplateRows: `repeat(${ROWS}, ${PIXEL}px)`,
      }}
    >
      {FILLED.flatMap((row, r) =>
        row.map((cell, c) => {
          if (cell === 0) {
            return <div key={`${r}-${c}`} style={{ width: PIXEL, height: PIXEL }} />;
          }
          const isOutline = OUTLINE[r][c] === 1;
          return (
            <div
              key={`${r}-${c}`}
              style={{
                width: PIXEL,
                height: PIXEL,
                backgroundColor: '#111111',
                // Outline pixels are always visible; interior pixels fade in on fill
                opacity: isOutline ? 1 : filled ? 1 : 0,
                transition: isOutline ? 'none' : 'opacity 0.22s ease-in-out',
              }}
            />
          );
        })
      )}
    </div>
  );
}

// ─── Preloader ─────────────────────────────────────────────────────────────
const NUM_HEARTS       = 6;
const START_DELAY_MS   = 250;   // brief pause before hearts start filling
const HEART_INTERVAL_MS = 320;  // time between each heart fill
const POST_FILL_PAUSE  = 380;   // pause after last heart before fade-out

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [filledCount, setFilledCount] = useState(0);

  useEffect(() => {
    // Lock scroll while loader is visible
    document.body.style.overflow = 'hidden';

    let filled = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        filled += 1;
        setFilledCount(filled);

        if (filled >= NUM_HEARTS) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
            // Restore scroll after framer exit animation (600ms)
            setTimeout(() => {
              document.body.style.overflow = '';
            }, 650);
          }, POST_FILL_PAUSE);
        }
      }, HEART_INTERVAL_MS);

      return () => clearInterval(interval);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(start);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#FAFAF8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem',
      }}
    >
      {/* Large serif name */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3.5rem, 11vw, 7.5rem)',
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          color: '#111111',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        <div>Mariya</div>
        <div>Sibiya</div>
      </div>

      {/* Pixel hearts row */}
      <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'center' }}>
        {Array.from({ length: NUM_HEARTS }).map((_, i) => (
          <PixelHeart key={i} filled={i < filledCount} />
        ))}
      </div>
    </motion.div>
  );
}
