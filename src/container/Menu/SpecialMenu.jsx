import React from 'react';
import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { assets, data } from "../../constants/index"

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' >

    <div className="app__specialMenu-title">
      <SubHeading title={"Menu That Fits You Palatee"} />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

  </div>
);

export default SpecialMenu;
