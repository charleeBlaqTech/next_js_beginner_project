'use client';

import React from 'react';
// import styles from './Buttons.module.css';

const Buttons = () => {
  return (
    <div>
        <button className="btn btn-primary" onClick={()=>console.log('i was pressed')}>Add More</button>
    </div>
  )
}

export default Buttons