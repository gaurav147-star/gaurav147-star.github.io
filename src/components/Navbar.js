import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter, useLocation } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import "./Navbar.css"

const capitalizeFirstLetter = (string) => {
  if (string.slice(1) === "") {
    return "Home";
  } else {

    return string.charAt(1).toUpperCase() + string.slice(2);
  }
}
function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();
  document.title = `${capitalizeFirstLetter(location.pathname)}-Portfolio`

  return (
    <div className="navbar-main">
      <div className="brand">
        <RouterLink className='brand-link' to="/">
          <h1><span>G</span>aurav <span>G</span>upta</h1>
        </RouterLink>
      </div>
      <Box className='nav_bar' sx={{ width: '60%' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab className='nav_bartabs' style={{ textDecoration: "none", width: "140px", color: "white", fontSize: "1.1rem" }} label="Home" component={RouterLink} to="/" />
          <Tab className='nav_bartabs' style={{ textDecoration: "none", width: "140px", color: "white", fontSize: "1.1rem" }} label="About" component={RouterLink} to="/about" />
          <Tab className='nav_bartabs' style={{ textDecoration: "none", width: "140px", color: "white", fontSize: "1.1rem" }} label="Project" component={RouterLink} to="/project" />
          <Tab className='nav_bartabs' style={{ textDecoration: "none", width: "140px", color: "white", fontSize: "1.1rem" }} label="Exprerience" component={RouterLink} to="/skill" />

        </Tabs>
      </Box>
    </div>
  );
}
