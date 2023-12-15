import React, { useState } from 'react';
import './InputOption.css';

function InputOption({ Icon, title, color }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`inputOption ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <Icon style={{ color: color }} />
      <h4 style={{ color: clicked ? 'white' : 'inherit' }}>{title}</h4>
    </div>
  );
}

export default InputOption;
