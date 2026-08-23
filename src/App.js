import React, { useState, useEffect } from 'react';
import Portfolio from './components/portfolio';
import './App.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over a clickable element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className={`App ${isHovering ? 'cursor-hover' : ''}`}>
      {/* Custom Cursor */}
      <div 
        className="custom-cursor-dot hidden md:block" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} 
      />
      <div 
        className="custom-cursor-ring hidden md:block" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} 
      />
      
      <Portfolio />
    </div>
  );
}

export default App;
