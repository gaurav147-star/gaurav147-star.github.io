import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Link as RouterLink,
  Link,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Project", path: "/project" },
  { label: "Experience", path: "/experience" },
];

const capitalizeFirstLetter = (string) => 
  string.slice(1) === "" ? "Home" : string.charAt(1).toUpperCase() + string.slice(2);

function Router({ children }) {
  return typeof window === "undefined" ? (
    <StaticRouter location="/">{children}</StaticRouter>
  ) : (
    <MemoryRouter>{children}</MemoryRouter>
  );
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const [nav, setNav] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 80);
    };
    
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  React.useEffect(() => {
    document.title = `${capitalizeFirstLetter(location.pathname)}-Portfolio`;
  }, [location.pathname]);

  const commonTabStyles = "w-[140px] text-white text-lg no-underline";
  const commonLinkStyles = "no-underline hover:no-underline hover:text-white";

  return (
    <div className={`sticky z-[1000] left-0 top-0 transition-all duration-500 flex justify-between p-2.5 
      ${navbar ? 'bg-black/80' : ''}`}>
      <div className="brand">
        <RouterLink to="/" className="hover:no-underline">
          <h1 className="text-4xl text-white md:ml-5 lg:ml-12">
            <span className="text-[rgba(255,106,0,0.9)]">G</span>aurav{' '}
            <span className="text-[rgba(255,106,0,0.9)]">G</span>upta
          </h1>
        </RouterLink>
      </div>

      <Box className="hidden md:flex rounded-[50px] w-2/3">
        <Tabs 
          value={value} 
          onChange={(_, newValue) => setValue(newValue)} 
          centered
          sx={{
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(180deg, rgba(255,184,0,0.9) 0%, rgba(255,0,0,0.9) 100%)'
            }
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Tab
              key={item.path}
              className={commonTabStyles}
              label={item.label}
              component={RouterLink}
              to={item.path}
            />
          ))}
        </Tabs>
      </Box>

      <div onClick={() => setNav(!nav)} className="block md:hidden">
        {nav ? (
          <CloseIcon sx={{ fontSize: 35, color: "white" }} />
        ) : (
          <MenuIcon sx={{ fontSize: 35, color: "white" }} />
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed left-0 top-0 w-[70%] h-[600px] border-r border-r-gray-900 bg-black 
        transition-all duration-500 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className="w-full text-3xl font-bold text-[#e16a00e6] m-4">
          Gaurav Gupta
        </h1>

        <ul className="pt-5 uppercase p-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.path} className="p-4 border-b border-gray-600 text-white">
              <Link
                to={item.path}
                className={commonLinkStyles}
                onClick={() => setNav(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}