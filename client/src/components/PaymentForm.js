import React from "react";
import Footer from "./Footer";
import NavTop from "./NavTop";
import Image from "../assets/dot-map.png";
import NavTopMob from "./NavTopMob";
import "./styles.css";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { useLocation } from "react-router-dom";
const PaymentForm = () => {
  


  const location=useLocation();
  const [ip, setIP] = useState("");
  const Razorpay = useRazorpay();
  const navigate = useNavigate();
  const handlePayment = async (params) => {
    //inputs
    const name = document.querySelector(".name");
    const phone = document.querySelector(".phone");
    const address = document.querySelector(".address");
    const city = document.querySelector(".city");
    const pincode = document.querySelector(".pincode");
    const email = document.querySelector(".email");
    if (name.value == "" || phone.value == "" || address.value == "" 
    || city.value == "" || pincode.value == "" || email.value == ""
    ) {
      alert("Every field must be filled out");
      
    }
    else 
    {
    
    

    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);

    var orderId;
    const article = {
      name: name.value,
      phone: phone.value,
      address: address.value,
      city: city.value,
      pincode: pincode.value,
      email: email.value,
      payment_id: "#PAYID@344",
      payment_method: "Razorpay",
      from_ip: res.data.IPv4,
      from_browser: "",
    };
    //checkout order
    axios
      .post("http://localhost:3000/api/v1/checkout_order", article)
      .then((response) => {
        console.log(response.data.details, response.data.details.order_id);
        orderId = response.data.details.order_id;
      });

    // const order = await createOrder(params); //  Create order on your backend
    const options = {
      key: "rzp_live_2A6wg2SgyvO7CN", // Enter the Key ID generated from the Dashboard
      amount: "30000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Whatsapp Chat Analyzer",
      description: "Whatsapp Chat Analyzer",
      image: logo,
      //   order_id: "order_DBJOWzybf0sJbb", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        const stat = {
          status: "Paid",
          capture_status: "Yes",
          payment_id: response.razorpay_payment_id,
        };
        axios
          .post(
            `http://localhost:3000/api/v1/checkout_order_update/${orderId}`,
            stat
          )
          .then((response) => {
            console.log(response);
            navigate("/success",{state:location.state});
          });

        // alert(response.razorpay_payment_id);
        // run api checkout order //checkoutorder update
        console.log(response);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: name.value,
        email: email.value,
        contact: phone.value,
      },
      notes: {
        // address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      navigate("/");
      alert("Payment Failed Please Try Again from beginning")
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  }
  };
  return (
    <>
      <div
        style={{
          background: `url(
            ${Image}
          )`,
          backgroundColor: "rgb(56 141 125)",
          height: window.screen.width > 700 ? "100vh" : "",
        }}
      >
        {window.screen.width > 700 ? <NavTop /> : <NavTopMob />}
        <hr style={{ borderTop: "1px solid white" }} />
        <div
          className="payContainer"
          style={{
            width: window.screen.width > 700 ? "40vw" : "90vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "80px",
            boxShadow: "0 0 10px #aaa",
            height: window.screen.width > 700 ? "61vh" : "",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "8px solid rgb(56 141 110)",
            marginBottom: "50px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            padding: window.screen.width < 700 && "100px",
          }}
        >
          <div className="payment">
            <h5
              className="payTitle"
              style={{
                float: "left",
              }}
            >
              Payment of:
            </h5>
            <h5 className="price">Rs. 300</h5>
          </div>
          <div className="paymentOption"></div>

          <form className="cardDetails">
            <input type="text" className="name" placeholder="Enter Name" />
            <input type="text" className="phone" placeholder="Enter Number ex:919888888889" />
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            />
            <input type="text" className="city" placeholder="Enter City" />
            <input
              type="text"
              className="pincode"
              placeholder="Enter Pincode"
            />
            <input type="text" className="email" placeholder="Enter Email" />
            {/* <input type="text" className="cardnum" placeholder="Enter Card Number" />
                <div className="cardDe">
                <input type="text" className="expiry" placeholder="Expiry" />
                <input type="text" className="cvv" placeholder="CVV"/>
                </div> */}
          </form>

          <div className="buttons">
            <button className="cancel" onClick={()=>{navigate('/analysed',{state:location.state})}} >Cancel</button>
            <button className="checkout" onClick={
              handlePayment
              }>
              Checkout
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PaymentForm;
