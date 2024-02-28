import { Link, NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { logo, userIcon } from "../../assets/images/images";
import { useState } from "react";
const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  return (
    <div className="w-full mx-auto my-0 mb-4 header_area max-w-7xl sticky top-0 z-10">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="w-56" />
          </Link>
        </Navbar.Brand>
        <div className="relative flex md:order-2">
          <div className="bottom-0 left-9 md:left-7 absolute w-3.5 h-3.5 z-10 bg-teal-400 border-2 border-white rounded-full">
            &nbsp;
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={userIcon} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">User Name</span>
              <span className="block text-sm font-medium truncate">
                name@info.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => logoutUser()}>Log out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <li>
            <NavLink
              className={
                activeMenuItem === "item1" ? "active" : "text-gray-400"
              }
              onClick={() => handleMenuItemClick("item1")}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              className={
                activeMenuItem === "item5" ? "active" : "text-gray-400"
              }
              onClick={() => handleMenuItemClick("item5")}
              to="/Services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                activeMenuItem === "item6" ? "active" : "text-gray-400"
              }
              onClick={() => handleMenuItemClick("item6")}
              to="/Support"
            >
              Support
            </NavLink>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
