import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import {
  Link as RouterLink,
  Link,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const capitalizeFirstLetter = (string) => {
  if (string.slice(1) === "") {
    return "Home";
  } else {
    return string.charAt(1).toUpperCase() + string.slice(2);
  }
};
function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const [nav, setNav] = React.useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();
  document.title = `${capitalizeFirstLetter(location.pathname)}-Portfolio`;

  return (
    <div className="navbar-main">
      <div className="brand">
        <RouterLink className="brand-link" to="/">
          <h1>
            <span>G</span>aurav <span>G</span>upta
          </h1>
        </RouterLink>
      </div>
      <Box className="nav_bar hidden md:flex" sx={{ width: "60%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            className="nav_bartabs"
            style={{
              textDecoration: "none",
              width: "140px",
              color: "white",
              fontSize: "1.1rem",
            }}
            label="Home"
            component={RouterLink}
            to="/"
          />
          <Tab
            className="nav_bartabs"
            style={{
              textDecoration: "none",
              width: "140px",
              color: "white",
              fontSize: "1.1rem",
            }}
            label="About"
            component={RouterLink}
            to="/about"
          />
          <Tab
            className="nav_bartabs"
            style={{
              textDecoration: "none",
              width: "140px",
              color: "white",
              fontSize: "1.1rem",
            }}
            label="Project"
            component={RouterLink}
            to="/project"
          />
          <Tab
            className="nav_bartabs"
            style={{
              textDecoration: "none",
              width: "140px",
              color: "white",
              fontSize: "1.1rem",
            }}
            label="Experience"
            component={RouterLink}
            to="/experience"
          />
        </Tabs>
      </Box>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <CloseIcon sx={{ fontSize: 35, color: "white" }} />
        ) : (
          <MenuIcon sx={{ fontSize: 35, color: "white" }} />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 rounded-md top-0 w-[70%] h-[600px] border-r border-r-gray-900 bg-[#000] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#e16a00e6] m-4">
          Gaurav Gupta
        </h1>

        <ul className="pt-5 uppercase p-4">
          <li className="p-4 border-b border-gray-600 text-white">
            <Link to="/" className="no-underline hover:no-underline hover:text-white">Home </Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-white">
            <Link to="/about" className="no-underline hover:no-underline hover:text-white">About </Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-white">
            <Link to="/project" className="no-underline hover:no-underline hover:text-white">Projects</Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-white no-underline ">
            <Link to="/experience" className="no-underline hover:no-underline hover:text-white">Experience </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
