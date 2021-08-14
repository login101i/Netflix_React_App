import { useState } from "react";

import "./navbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(window.pageYOffset);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset > 20 ? true : false);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled": "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          <span>Home Page</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <PersonIcon className="icon" />
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <div className="profile">
            <ExpandMoreIcon className="icon" />
            <div className="options">
              <div>settings</div>
              <div>logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
