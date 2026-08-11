import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import beforeImg from '../assets/images/before_kitchen.png';
import afterImg from '../assets/images/after_kitchen.png';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({ 
  title = "See the Difference",
  subtitle = "Move the slider to reveal the transformative power of a Plenora Deep Clean.",
  beforeImage = beforeImg,
  afterImage = afterImg
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="before-after-container">
      <div className="container">
        <div className="before-after-header">
          <h2 className="before-after-title">{title}</h2>
          <p className="before-after-subtitle">{subtitle}</p>
        </div>

        <div 
          className="before-after-wrapper" 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Full background) */}
          <img src={afterImage} alt="After Plenora Clean" className="after-image" />
          <span className="slider-badge after">AFTER</span>

          {/* Before Image (Clipped overlay) */}
          <div className="before-image-container" style={{ width: `${sliderPos}%` }}>
            <img src={beforeImage} alt="Before Plenora Clean" className="before-image" />
            <span className="slider-badge before">BEFORE</span>
          </div>

          {/* Divider Line & Drag Handle */}
          <div className="slider-handle-line" style={{ left: `${sliderPos}%` }}>
            <div className="slider-handle-button">
              <SlidersHorizontal size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
