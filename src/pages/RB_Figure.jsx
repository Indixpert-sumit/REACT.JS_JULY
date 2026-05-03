import React from 'react';
import { Figure } from 'react-bootstrap'; 
import MyScreenshot from './../assests/Figure.png'; 

const RB_Figure = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Figure>
        <Figure.Image
          width="100%"
          alt="React Features"
          src={MyScreenshot} 
          style={{ borderRadius: "8px" }}
        />

        <Figure.Caption style={{ paddingTop: "10px" }}>
     
        </Figure.Caption>
      </Figure>
    </div>
  );
}
  
export default RB_Figure;