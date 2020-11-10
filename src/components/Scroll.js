import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ border: '5px solid black', padding:"10px", minHeight:"500px"}}>
      {props.children}
    </div>
  );
};

export default Scroll;