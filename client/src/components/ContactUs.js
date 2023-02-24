import React, { useState } from "react";
import Footer from "./Footer";
import NavTop from "./NavTop";
import Image from "../assets/dot-map.png";
import NavTopMob from "./NavTopMob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function sendData() {
    if (name !== "" && phone !== "" && email !== "" && msg !== "") {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        msg: msg,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      console.log(name, email, phone, msg);
      fetch("http://localhost:3000/api/v1/visitors", requestOptions)
        .then((response) => response.text())
        .then((result) => alert("Thank you! We'll get back to you shortly"))
        .then(() => window.location.reload())
        .catch((error) => console.log("error", error));
    } else alert("Please fill the details!");
  }
  return (
    <>
      <div
        style={{
          background: `url(
            ${Image}
          )`,
          backgroundColor: "rgb(22 129 108)",
          height: window.screen.width > 700 ? "100vh" : "",
        }}
      >
        {window.screen.width > 700 ? <NavTop /> : <NavTopMob />}
        <hr style={{ borderTop: "1px solid white" }} />
        <div
          style={{
            width: window.screen.width > 700 ? "50vw" : "90vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "80px",
            boxShadow: "0 0 10px #aaa",
            height: window.screen.width > 700 ? "61vh" : "",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "8px solid rgb(56 141 110)",
            marginBottom: "50px",
          }}
        >
          <div
            className=" justify-content-evenly align-items-center mt-4"
            style={{ display: window.screen.width > 700 ? "flex" : "block" }}
          >
            <div
              style={{
                height: "360px",
                backgroundColor: "rgb(56 151 110)",
                width: window.screen.width > 700 ? "40%" : "90%",
                borderRadius: "10px",
                color: "white",
                padding: "50px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <h5 style={{ margin: 0, marginLeft: "10px" }}>LOCATION</h5>
              </div>
              <small>#128, 2nd Cross Rd, FCI Layout, Vijayanagar, Bengaluru, Karnataka 560026</small>
              <div className="d-flex align-items-center mb-2 mt-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <h5 style={{ margin: 0, marginLeft: "10px" }}>EMAIL</h5>
              </div>

              <small>support@flipwhatsapp.com</small>
              <div className="d-flex align-items-center mb-2 mt-2">
                <FontAwesomeIcon icon={faPhone} />
                <h5 style={{ margin: 0, marginLeft: "10px" }}>PHONE</h5>
              </div>
              <small>7090567059</small>
            </div>
            <div
              style={{
                height: "360px",
                width: window.screen.width > 700 ? "40%" : "90%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h5 className="text-center text-success mt-lg-0 mt-4">
                Quick Contact
              </h5>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3 p-2"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="form-control mb-3 p-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3 ">
                  <input
                    type="number"
                    className="form-control p-2"
                    id="exampleInputPassword1"
                    placeholder="Your Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write Your Message..."
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <div className="text-center">
                <button className="btn btn-success mt-3" onClick={sendData}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
