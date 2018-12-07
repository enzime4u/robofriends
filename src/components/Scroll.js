import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflow: 'scroll', border: '3px solid black', height: '700px'}}>
      {props.children}
    </div>
  );
};


export default Scroll;