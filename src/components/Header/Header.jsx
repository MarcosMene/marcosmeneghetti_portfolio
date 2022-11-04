import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "solid underline red 2px" : "none",
      textUnderlineOffset: "10px",
    };
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 300,
    heigth: 300,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 992 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <div className={classes.header_full}>
      <header className={classes.header}>
        <section className={classes.header_content}>
          <NavLink to="/" className={classes.header_content_logo}>
            <img src={`/images/logo/logo.png`} alt="logo" />
          </NavLink>
          <nav
            className={`${classes.header_content_nav} ${
              menuOpen && size.width < 992 ? classes.isMenu : ""
            }`}
          >
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setMenuOpen(false)}
                  style={navLinkStyles}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  onClick={() => setMenuOpen(false)}
                  style={navLinkStyles}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="skills"
                  onClick={() => setMenuOpen(false)}
                  style={navLinkStyles}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="portfolio"
                  onClick={() => setMenuOpen(false)}
                  style={navLinkStyles}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  onClick={() => setMenuOpen(false)}
                  style={navLinkStyles}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={classes.header_content_toggle}>
            {!menuOpen
              ? (document.body.classList.remove("stopScroll"),
                (<BiMenuAltRight onClick={menuToggleHandler} />))
              : (document.body.classList.add("stopScroll"),
                (<AiOutlineClose onClick={menuToggleHandler} />))}
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
