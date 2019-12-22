import React from 'react';
import './box.css';

const Box = ({ children, className = '' }) => {
  return (
    <div className={`box-root ${className}`}>
      {children}
    </div>
  );
};

export default Box;