import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getLenis } from '../lib/lenis';

// ─── Pixel heart maps (11 cols × 9 rows) ───────────────────────────────────
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

const COLS = 11;
const ROWS = 9;

// ─── Responsive pixel size ──────────────────────────────────────────────────
function getPixelSize() {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1280;
  if (w < 400) return 4;   // ~264px total for 6 hearts at gap=8px → 312px ✓
  if (w < 640) return 5;   // ~330px + gaps ✓
  if (w < 1024) return 6;
  return 8;
}

function getHeartGap(px: number) {
  if (px <= 4) return '8px';
  if (px <= 5) return '10px';
  if (px <= 6) return '12px';
  return '18px';
}

// ─── Single pixel heart ─────────────────────────────────────────────────────
function PixelHeart({ filled, px }: { filled: boolean; px: number }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${COLS}, ${px}px)`,
        gridTemplateRows: `repeat(${ROWS}, ${px}px)`,
      }}
    >
      {FILLED.flatMap((row, r) =>
        row.map((cell, c) => {
          if (cell === 0) {
            return <div key={`${r}-${c}`} style={{ width: px, height: px }} />;
          }
          const isOutline = OUTLINE[r][c] === 1;
          return (
            <div
              key={`${r}-${c}`}
              style={{
                width: px,
                height: px,
                backgroundColor: '#111111',
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

// ─── Preloader ───────────────────────────────────────────────────────────────
const NUM_HEARTS        = 6;
const START_DELAY_MS    = 250;
const HEART_INTERVAL_MS = 320;
const POST_FILL_PAUSE   = 380;

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [filledCount, setFilledCount] = useState(0);
  const [px, setPx] = useState(getPixelSize);

  // Recompute heart size on resize
  useEffect(() => {
    const onResize = () => setPx(getPixelSize());
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    // Lock: body scroll + Lenis
    document.body.style.overflow = 'hidden';
    getLenis()?.stop();

    // Track all timer IDs so cleanup is always complete
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let postFillId: ReturnType<typeof setTimeout> | null = null;
    let unlockId: ReturnType<typeof setTimeout> | null = null;

    let filled = 0;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        filled += 1;
        setFilledCount(filled);

        if (filled >= NUM_HEARTS) {
          if (intervalId) clearInterval(intervalId);
          postFillId = setTimeout(() => {
            onComplete(); // triggers AnimatePresence exit (600ms)
            // Unlock after exit animation finishes
            unlockId = setTimeout(() => {
              document.body.style.overflow = '';
              getLenis()?.start();
            }, 650);
          }, POST_FILL_PAUSE);
        }
      }, HEART_INTERVAL_MS);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
      if (postFillId) clearTimeout(postFillId);
      if (unlockId) clearTimeout(unlockId);
      document.body.style.overflow = '';
      getLenis()?.start();
    };
  }, [onComplete]);

  const gap = getHeartGap(px);

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
        gap: 'clamp(1.5rem, 4vw, 2.5rem)',
        padding: '1rem',
      }}
    >
      {/* Large serif name */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.8rem, 11vw, 7.5rem)',
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
      <div
        style={{
          display: 'flex',
          gap,
          alignItems: 'center',
          flexWrap: 'nowrap',
        }}
      >
        {Array.from({ length: NUM_HEARTS }).map((_, i) => (
          <PixelHeart key={i} filled={i < filledCount} px={px} />
        ))}
      </div>
    </motion.div>
  );
}
