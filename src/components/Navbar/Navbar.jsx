import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const ListItems = () =>(
    <>
        <li className="p__opensans" onClick={()=>{setToggle(false)}} >
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans" onClick={()=>{setToggle(false)}} >
          <a href="#about">About</a>
        </li>
        <li className="p__opensans" onClick={()=>{setToggle(false)}} >
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans" onClick={()=>{setToggle(false)}} >
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans" onClick={()=>{setToggle(false)}} >
          <a href="#contact">Contact</a>
        </li>
    </>
  )

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        <ListItems/>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book a table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={25}
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <div class="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu 
            fontSize={27} 
            className="overlay__close"
            onClick={()=>{setToggle(false)}} 
            />
            <ul className="app__navbar-smallscreen-links">
            <ListItems/>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
