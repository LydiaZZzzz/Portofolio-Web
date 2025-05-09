import React, { useEffect, useRef } from 'react';

const TAIL_LENGTH = 16;
const COLORS = [
  'rgba(200, 0, 32, 1)',    // 深红
  'rgba(200, 90, 0, 1)',   // 深橙
  'rgba(180, 180, 0, 1)',  // 深黄
  'rgba(0, 180, 60, 1)',   // 深绿
  'rgba(0, 100, 200, 1)',  // 深蓝
  'rgba(0, 0, 180, 1)',    // 深靛蓝
  'rgba(100, 0, 180, 1)',  // 深紫
];

function getColor(i) {
  // 让拖尾点平滑过渡彩虹色
  const idx = Math.floor(i * (COLORS.length - 1) / (TAIL_LENGTH - 1));
  return COLORS[idx];
}

function CustomCursor() {
  const dotsRef = useRef([]);
  const positions = useRef(Array(TAIL_LENGTH).fill({ x: 0, y: 0 }));
  const animFrame = useRef();

  useEffect(() => {
    let lastY = 0;
    const handleMove = (e) => {
      const { clientX: x, clientY: y } = e;
      lastY = y;
      positions.current = [
        { x, y },
        ...positions.current.slice(0, TAIL_LENGTH - 1),
      ];
    };
    window.addEventListener('mousemove', handleMove);

    // 动画帧：让每个点有轻微上下漂浮
    function animate() {
      dotsRef.current.forEach((dot, i) => {
        if (dot) {
          const base = positions.current[i] || { x: 0, y: 0 };
          // 魔法漂浮: 上下轻微抖动
          const floatY = base.y + Math.sin(Date.now() / 200 + i) * (i * 0.8);
          dot.style.left = base.x + 'px';
          dot.style.top = floatY + 'px';
        }
      });
      animFrame.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={el => (dotsRef.current[i] = el)}
          className="cursor-dot tail-dot magic-dot"
          style={{
            opacity: 1 - i / TAIL_LENGTH,
            background: getColor(i),
            boxShadow: `0 0 16px 4px ${getColor(i)}, 0 0 0 2.5px rgba(0,0,0,0.18)`,
            width: 18 - i + 'px',
            height: 18 - i + 'px',
            zIndex: 9999,
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.18s, height 0.18s, background 0.18s',
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </>
  );
}

export default CustomCursor; 