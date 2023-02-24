import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavTop = ({ selected }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-dark">
        <div className="container pt-3">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="200" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            style={{ marginLeft: "20%" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="/#instructions"
                >
                  INSTRUCTION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#about-us">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#faqs">
                  FAQS
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <button
                onClick={() => {
                  if (
                    window.location.href.includes("contact") ||
                    window.location.href.includes("analysed")
                  ) {
                    navigate("/");
                  } else selected();
                }}
                className="btn btn-outline-light"
              >
                Analyse Now
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavTop;
