import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = ({ selected }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "rgb(41 112 99)",
        paddingBottom: "10px",
        paddingTop: "10px",
      }}
    >
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div>
          <div className="text-center">
            <Link className="text-white  mb-5" to="/">
              <img src={logo} width="200" />
            </Link>
          </div>
          <h6
            className=" text-center mb-4 mt-3"
            style={{
              width: window.screen.width > 700 ? "500px" : "90vw",
              color: "lightgrey",
            }}
          >
            We do not transfer chat data to internet or any remote server, all
            analysis is performed on the device in offline
          </h6>
          <div className="text-center">
            <button
              className="btn btn-outline-light"
              type="submit"
              onClick={() => {
                if (
                  window.location.href.includes("contact") ||
                  window.location.href.includes("analysed")
                ) {
                  navigate("/");
                } else selected();
              }}
            >
              Analyse Now
            </button>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "1px solid white" }} />
      <h6 className="text-center text-white">© 2022 copyright Flip Whatsapp</h6>
    </div>
  );
};

export default Footer;
