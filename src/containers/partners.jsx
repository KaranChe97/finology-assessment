import React from "react";
import { Title } from "../components";
import airBnb from "../assets/5-partners/airbnb.png";
import apple from "../assets/5-partners/apple.PNG";
import facebook from "../assets/5-partners/facebook.PNG";
import google from "../assets/5-partners/google.PNG";
import nvidia from "../assets/5-partners/nvidia.PNG";
import samsung from "../assets/5-partners/samsung.PNG";
import tesla from "../assets/5-partners/tesla.PNG";

function Partners() {
  return (
    <div className="partner-container">
      <Title> We've worked with </Title>
      <div className="partner-logos">
        <img src={airBnb} alt="airBnb" />
        <img src={apple} alt="apple" />
        <img src={facebook} alt="facebook" />
        <img src={google} alt="google" />
        <img src={nvidia} alt="nvidia" />
        <img src={samsung} alt="samsung" />
        <img src={tesla} alt="tesla" />
      </div>
    </div>
  );
}

export default Partners;
