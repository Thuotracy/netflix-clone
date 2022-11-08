import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>

        <div className="right">
            <Search/>
            <span>Tracy</span>
            <Notifications/>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&drp=2&w=500" alt="" />
            <ArrowDropDown/>
        </div>   
      </div>
    </div>
  );
};

export default Navbar;
