import { useEffect, useRef } from 'react';

const CHARSET = ['.', ':', '+', '*', 'o', 'x', '/', '\\', '|', '~', '7', '9', 'a', 'e'];

function createLilyPoints() {
  const points = [];

  const pushFilledPetal = ({
    cx,
    cy,
    length,
    width,
    angleDeg,
    rows,
    curl = 0,
    spread = 1,
  }) => {
    const angle = (angleDeg * Math.PI) / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    for (let row = 0; row < rows; row += 1) {
      const t = row / (rows - 1);
      const y = -length * t;
      const tipLift = 1 - t;
      const centerDrift = Math.sin(t * Math.PI) * curl;
      const halfWidth = width * Math.sin(Math.PI * t) ** 0.82 * spread;
      const columns = Math.max(3, Math.floor(halfWidth * 150));

      for (let col = 0; col < columns; col += 1) {
        const u = columns === 1 ? 0.5 : col / (columns - 1);
        const xNorm = (u - 0.5) * 2;
        const feather = 1 - Math.abs(xNorm) ** 1.28;
        const x = centerDrift + xNorm * halfWidth;

        points.push({
          x: cx + x * cos - y * sin,
          y: cy + x * sin + y * cos,
          size: 0.8 + feather * 0.45 + tipLift * 0.08,
          brightness: 0.26 + feather * 0.28 + tipLift * 0.32,
        });

        if (col === 0 || col === columns - 1 || (u > 0.46 && u < 0.54 && row % 4 === 0)) {
          points.push({
            x: cx + (x * 1.02) * cos - (y * 0.99) * sin,
            y: cy + (x * 1.02) * sin + (y * 0.99) * cos,
            size: 0.92,
            brightness: 0.42 + tipLift * 0.24,
          });
        }
      }
    }
  };

  const pushStem = ({ x1, y1, x2, y2, density, wobble = 0.003, brightness = 0.24 }) => {
    for (let i = 0; i < density; i += 1) {
      const t = i / (density - 1);
      points.push({
        x: x1 + (x2 - x1) * t + Math.sin(t * 7) * wobble,
        y: y1 + (y2 - y1) * t,
        size: 0.78,
        brightness,
      });
    }
  };

  const pushArcLeaf = ({ cx, cy, rx, ry, startDeg, endDeg, density, brightness = 0.22 }) => {
    const start = (startDeg * Math.PI) / 180;
    const end = (endDeg * Math.PI) / 180;
    for (let i = 0; i < density; i += 1) {
      const t = i / (density - 1);
      const angle = start + (end - start) * t;
      points.push({
        x: cx + Math.cos(angle) * rx,
        y: cy + Math.sin(angle) * ry,
        size: 0.76,
        brightness: brightness + Math.sin(t * Math.PI) * 0.08,
      });
    }
  };

  const pushStamen = ({ cx, cy, angleDeg, length }) => {
    const angle = (angleDeg * Math.PI) / 180;
    const x2 = cx + Math.cos(angle) * length;
    const y2 = cy + Math.sin(angle) * length;
    pushStem({ x1: cx, y1: cy, x2, y2, density: 24, wobble: 0.0018, brightness: 0.32 });
    for (let i = 0; i < 14; i += 1) {
      const a = (i / 14) * Math.PI * 2;
      points.push({
        x: x2 + Math.cos(a) * 0.007,
        y: y2 + Math.sin(a) * 0.0052,
        size: 0.86,
        brightness: 0.68,
      });
    }
  };

  pushFilledPetal({
    cx: 0.505,
    cy: 0.71,
    length: 0.35,
    width: 0.102,
    angleDeg: 0,
    rows: 52,
    curl: 0.003,
    spread: 0.92,
  });

  pushFilledPetal({
    cx: 0.47,
    cy: 0.725,
    length: 0.285,
    width: 0.165,
    angleDeg: -56,
    rows: 42,
    curl: -0.02,
    spread: 1.08,
  });

  pushFilledPetal({
    cx: 0.396,
    cy: 0.752,
    length: 0.23,
    width: 0.16,
    angleDeg: -92,
    rows: 38,
    curl: -0.024,
    spread: 1.12,
  });

  pushFilledPetal({
    cx: 0.54,
    cy: 0.725,
    length: 0.285,
    width: 0.165,
    angleDeg: 56,
    rows: 42,
    curl: 0.02,
    spread: 1.08,
  });

  pushFilledPetal({
    cx: 0.614,
    cy: 0.752,
    length: 0.23,
    width: 0.16,
    angleDeg: 92,
    rows: 38,
    curl: 0.024,
    spread: 1.12,
  });

  pushFilledPetal({
    cx: 0.454,
    cy: 0.782,
    length: 0.162,
    width: 0.11,
    angleDeg: -130,
    rows: 28,
    curl: -0.014,
    spread: 1.02,
  });

  pushFilledPetal({
    cx: 0.556,
    cy: 0.782,
    length: 0.162,
    width: 0.11,
    angleDeg: 130,
    rows: 28,
    curl: 0.014,
    spread: 1.02,
  });

  pushStem({ x1: 0.504, y1: 0.744, x2: 0.504, y2: 0.985, density: 96 });
  pushArcLeaf({ cx: 0.39, cy: 0.93, rx: 0.112, ry: 0.134, startDeg: 94, endDeg: 146, density: 34 });
  pushArcLeaf({ cx: 0.615, cy: 0.93, rx: 0.112, ry: 0.134, startDeg: 34, endDeg: 86, density: 34 });
  pushArcLeaf({ cx: 0.412, cy: 0.89, rx: 0.078, ry: 0.094, startDeg: 102, endDeg: 156, density: 20, brightness: 0.2 });
  pushArcLeaf({ cx: 0.596, cy: 0.89, rx: 0.078, ry: 0.094, startDeg: 24, endDeg: 78, density: 20, brightness: 0.2 });

  pushStamen({ cx: 0.5, cy: 0.706, angleDeg: -78, length: 0.06 });
  pushStamen({ cx: 0.5, cy: 0.707, angleDeg: -26, length: 0.066 });
  pushStamen({ cx: 0.5, cy: 0.708, angleDeg: 24, length: 0.064 });
  pushStamen({ cx: 0.5, cy: 0.705, angleDeg: 72, length: 0.058 });

  for (let i = 0; i < 150; i += 1) {
    const t = i / 149;
    const spread = Math.sin(t * Math.PI) * 0.16;
    points.push({
      x: 0.5 + (t - 0.5) * spread,
      y: 0.834 + t * 0.012,
      size: 0.72,
      brightness: 0.16 + Math.sin(t * Math.PI) * 0.06,
    });
  }

  for (let i = 0; i < 74; i += 1) {
    const t = i / 73;
    const arc = Math.sin(t * Math.PI);
    points.push({
      x: 0.34 + t * 0.32,
      y: 0.858 + arc * 0.018,
      size: 0.72,
      brightness: 0.14 + arc * 0.08,
    });
  }

  return points;
}

const LILY_POINTS = createLilyPoints();
const STARS = Array.from({ length: 22 }, (_, i) => ({
  x: ((i * 37) % 100) / 100,
  y: ((i * 17 + 11) % 52) / 100 + 0.08,
  size: i % 3 === 0 ? 1.3 : 0.8,
}));

function InteractiveAsciiLily({ className = '' }) {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let frameId = 0;

    const setSize = () => {
      const ratio = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const handleMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
        active: true,
      };
    };

    const handleLeave = () => {
      pointerRef.current.active = false;
    };

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(canvas);
    setSize();

    canvas.addEventListener('pointermove', handleMove);
    canvas.addEventListener('pointerleave', handleLeave);

    const render = (time) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const t = time * 0.001;
      const pointer = pointerRef.current;

      context.clearRect(0, 0, width, height);
      context.fillStyle = '#050507';
      context.fillRect(0, 0, width, height);

      context.strokeStyle = 'rgba(255, 220, 228, 0.04)';
      context.lineWidth = 1;
      for (let x = 0; x < width; x += 32) {
        context.beginPath();
        context.moveTo(x + 0.5, 0);
        context.lineTo(x + 0.5, height);
        context.stroke();
      }
      for (let y = 0; y < height; y += 32) {
        context.beginPath();
        context.moveTo(0, y + 0.5);
        context.lineTo(width, y + 0.5);
        context.stroke();
      }

      context.save();
      context.globalCompositeOperation = 'screen';
      const reflection = context.createLinearGradient(0, height * 0.72, 0, height);
      reflection.addColorStop(0, 'rgba(237, 156, 185, 0.18)');
      reflection.addColorStop(1, 'rgba(237, 156, 185, 0)');
      context.fillStyle = reflection;
      context.fillRect(0, height * 0.72, width, height * 0.28);
      context.restore();

      context.textAlign = 'center';
      context.textBaseline = 'middle';

      STARS.forEach((star, index) => {
        const pulse = 0.55 + 0.45 * Math.sin(t * 1.5 + index * 0.8);
        context.fillStyle = `rgba(241, 202, 214, ${0.3 + pulse * 0.35})`;
        context.font = `${10 + star.size * 4}px "JetBrains Mono", monospace`;
        context.fillText(index % 2 === 0 ? '+' : '·', star.x * width, star.y * height);
      });

      LILY_POINTS.forEach((point, index) => {
        const px = point.x * width;
        const py = point.y * height;
        const driftX = Math.sin(t * 0.7 + index * 0.12) * 1.5;
        const driftY = Math.cos(t * 0.8 + index * 0.08) * 1.15;

        let offsetX = driftX;
        let offsetY = driftY;
        let glow = 0;

        if (pointer.active) {
          const dx = pointer.x * width - px;
          const dy = pointer.y * height - py;
          const distance = Math.hypot(dx, dy);
          if (distance < 110) {
            const influence = (110 - distance) / 110;
            offsetX -= (dx / Math.max(distance, 1)) * influence * 10;
            offsetY -= (dy / Math.max(distance, 1)) * influence * 10;
            glow = influence;
          }
        }

        const twinkle = 0.78 + 0.22 * Math.sin(t * 1.7 + index * 0.17);
        const alpha = Math.min(1, point.brightness * twinkle + glow * 0.38);
        const fontSize = 8.5 * point.size + glow * 1.6;
        const char = CHARSET[index % CHARSET.length];

        context.font = `${fontSize}px "JetBrains Mono", monospace`;
        context.fillStyle = `rgba(244, 168, 194, ${alpha})`;
        context.fillText(char, px + offsetX, py + offsetY);

        if (py > height * 0.74) {
          context.fillStyle = `rgba(244, 168, 194, ${alpha * 0.18})`;
          context.fillText(char, px + offsetX * 0.45, py + 34 + Math.abs(offsetY) * 0.4);
        }
      });

      frameId = window.requestAnimationFrame(render);
    };

    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointermove', handleMove);
      canvas.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default InteractiveAsciiLily;
