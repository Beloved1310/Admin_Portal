import React from 'react';
import './bb.css';


/**
 * Primary UI component for user interaction
 */
const Button = ({ children, ...rest }) => {
 
  return (
    <button
      className="button" {...rest}>
          {children}
    </button>
  )
};

export default Button;