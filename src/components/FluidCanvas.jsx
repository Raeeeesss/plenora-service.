import React, { useEffect, useRef } from 'react';

export default function FluidCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Dynamic fluid blobs
    const blobs = [
      { x: width * 0.2, y: height * 0.3, r: 180, vx: 0.4, vy: 0.3, color: 'rgba(13, 122, 87, 0.15)' },
      { x: width * 0.7, y: height * 0.6, r: 220, vx: -0.3, vy: 0.4, color: 'rgba(61, 163, 125, 0.18)' },
      { x: width * 0.5, y: height * 0.2, r: 150, vx: 0.2, vy: -0.3, color: 'rgba(220, 229, 254, 0.25)' },
      { x: width * 0.8, y: height * 0.2, r: 190, vx: -0.4, vy: -0.2, color: 'rgba(13, 122, 87, 0.12)' },
    ];

    // Interactive mouse position
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      blobs.forEach((blob) => {
        // Move blobs gently
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce at boundaries
        if (blob.x - blob.r < 0 || blob.x + blob.r > width) blob.vx *= -1;
        if (blob.y - blob.r < 0 || blob.y + blob.r > height) blob.vy *= -1;

        // Subtle reaction to mouse position
        const dx = mouseX - blob.x;
        const dy = mouseY - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300) {
          blob.x += (dx / dist) * 0.2;
          blob.y += (dy / dist) * 0.2;
        }

        // Draw radial fluid gradient
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.r
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }} 
    />
  );
}
