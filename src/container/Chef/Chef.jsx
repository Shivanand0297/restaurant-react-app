import React from 'react';
import { SubHeading } from '../../components';
import { assets } from '../../constants';
import './Chef.css';


const Chef = () => (
  <div className='app__bg app__wrapper section__padding' >

    <div class="app__wrapper_img app__wrapper_img-reverse">
      <img src={assets.chef} alt="chej"/>
    </div>

    <div class="app__wrapper_info">
      <SubHeading title={"Chef's Word"} />
      <h1 class="headtext__cormorant">What we believe in</h1>

      <div class="app__chef-content">
        <div class="app__chef-content_quote">
          <img src={assets.quote} alt="quote"/>
          <p className='p__opensans' >Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
        </div>
          <p className='p__opensans' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos accusantium delectus perspiciatis quaerat dolores natus molestiae est fugiat impedit.</p>
      </div>

      <div class="app__chef-sign">
        <p>Kevin luo</p>
        <p class="p__opensans">Chef & Founder</p>
        <img src={assets.sign} alt="sign"/>
      </div>
      
    </div>

  </div>
);

export default Chef;
