import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const skills = [
  { name: 'Skill 1', icon: '/icons/placeholder1.png' },
  { name: 'Skill 2', icon: '/icons/placeholder2.png' },
  { name: 'Skill 3', icon: '/icons/placeholder3.png' },
  { name: 'Skill 4', icon: '/icons/placeholder4.png' },
  { name: 'Skill 5', icon: '/icons/placeholder5.png' },
  { name: 'Skill 6', icon: '/icons/placeholder6.png' },
  { name: 'Skill 7', icon: '/icons/placeholder7.png' },
  { name: 'Skill 8', icon: '/icons/placeholder8.png' },
  { name: 'Skill 9', icon: '/icons/placeholder9.png' },
];

const WIDTH = 700;
const HEIGHT = 260;
const BALL_RADIUS = 42;

function SkillsBubblesPhysics() {
  const sceneRef = useRef();
  const engineRef = useRef();
  const ballsRef = useRef([]);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    const engine = Engine.create();
    engineRef.current = engine;
    // 让小球像气泡一样漂浮：重力为0
    engine.world.gravity.y = 0;

    // 创建边界
    const wallThickness = 80;
    const ground = Bodies.rectangle(WIDTH / 2, HEIGHT + wallThickness / 2, WIDTH + wallThickness * 2, wallThickness, { isStatic: true });
    const ceiling = Bodies.rectangle(WIDTH / 2, -wallThickness / 2, WIDTH + wallThickness * 2, wallThickness, { isStatic: true });
    const left = Bodies.rectangle(-wallThickness / 2, HEIGHT / 2, wallThickness, HEIGHT + wallThickness * 2, { isStatic: true });
    const right = Bodies.rectangle(WIDTH + wallThickness / 2, HEIGHT / 2, wallThickness, HEIGHT + wallThickness * 2, { isStatic: true });
    World.add(engine.world, [ground, ceiling, left, right]);

    // 创建小球
    const balls = skills.map((s, i) => {
      const x = 60 + i * 45 + Math.random() * 30;
      const y = 30 + Math.random() * 20;
      const angle = Math.random() * 2 * Math.PI;
      const speed = 1 + Math.random() * 1;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const ball = Bodies.circle(x, y, BALL_RADIUS, {
        restitution: 1,
        friction: 0,
        frictionAir: 0,
        label: String(i),
      });
      Matter.Body.setVelocity(ball, { x: vx, y: vy });
      return ball;
    });
    ballsRef.current = balls;
    World.add(engine.world, balls);

    // 创建渲染器
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: WIDTH,
        height: HEIGHT,
        wireframes: false,
        background: 'transparent',
      },
    });

    // 自定义渲染icon
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: WIDTH, y: HEIGHT },
    });

    // 启动物理引擎
    Engine.run(engine);

    // 用canvas绘制icon
    const ctx = render.canvas.getContext('2d');
    function drawIcons() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      // 先画小球
      balls.forEach((ball, i) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(ball.position.x, ball.position.y, BALL_RADIUS, 0, 2 * Math.PI);
        ctx.fillStyle = '#f5f5f5';
        ctx.shadowColor = '#aaa';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });
      // 再画icon
      balls.forEach((ball, i) => {
        const img = new window.Image();
        img.src = skills[i].icon;
        ctx.save();
        ctx.beginPath();
        ctx.arc(ball.position.x, ball.position.y, BALL_RADIUS - 2, 0, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(img, ball.position.x - 24, ball.position.y - 24, 48, 48);
        ctx.restore();
      });
    }
    // 每帧重绘
    let running = true;
    (function renderLoop() {
      if (!running) return;
      Matter.Engine.update(engine, 1000 / 60);
      drawIcons();
      requestAnimationFrame(renderLoop);
    })();

    return () => {
      running = false;
      Render.stop(render);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div style={{ width: WIDTH, height: HEIGHT, margin: '0 auto', position: 'relative', background: 'none' }}>
      <div ref={sceneRef} />
    </div>
  );
}

export default SkillsBubblesPhysics; 