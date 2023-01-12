import React from 'react';
import assets from '../../constants/images';

const SubHeading = ({title}) => (
  <div style={{marginBottom: "1rem"}} > 
    <p className="p__cormorant">{title}</p>
    <img src={assets.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
