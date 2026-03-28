import "./style.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "@assets/logo.png";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };

    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 720) close();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }) => `link${isActive ? " active" : ""}`;

  return (
    <header className="NavBar">
      <div className="navInner">
        <NavLink to="/" className="brand" onClick={close}>
          <img src={logo} alt="BastGry s" className="brandMain" />
        </NavLink>

        <button
          className={`burger ${open ? "isOpen" : ""}`}
          type="button"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`menu ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={close} className={linkClass}>
            Start
          </NavLink>
          <NavLink to="/oferta" onClick={close} className={linkClass}>
            Oferta
          </NavLink>
          <NavLink to="/realizacje" onClick={close} className={linkClass}>
            Realizacje
          </NavLink>
          {/* <NavLink to="/referencje" onClick={close} className={linkClass}>
            Referencje
          </NavLink> */}

          <NavLink to="/kontakt" onClick={close} className="cta">
            Kontakt i lokalizacja
          </NavLink>
        </nav>
      </div>

      <div className={`overlay ${open ? "show" : ""}`} onClick={close} />
    </header>
  );
};
