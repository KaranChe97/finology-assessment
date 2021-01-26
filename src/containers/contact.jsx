import React, { useState } from "react";
import { Title, SpaceBar } from "../components";
import { MapContainer, TileLayer } from "react-leaflet";

const initState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const position = [3.1379812, 101.5381378];
  const [message, setMessage] = useState(initState);

  const handleChange = (e) => {
    const data = { ...message };
    data[e.target.name] = e.target.value;
    setMessage(data);
  };

  const handleSend = () => {};

  return (
    <div className="contact-container">
      <Title> Contact Us </Title>
      <SpaceBar />

      <div className="contact-wrapper">
        <div className="contact-form">
          <label>Name</label>
          <div>
            <input
              name="name"
              type="text"
              value={message.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <SpaceBar />
          <label>Email</label>
          <div>
            <input
              name="email"
              type="email"
              value={message.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <SpaceBar />
          <label>subject</label>
          <div>
            <select
              value={message.subject}
              name="subject"
              onChange={handleChange}
              placeholder="Please select your subject here"
            >
              <option value={""} disabled>
                {" "}
                Please select your subject here{" "}
              </option>
              <option value={"Requirement"}> Requirement</option>
              <option value={"marketAnalysis"}> Market Analysis</option>
              <option value={"development"}> Development </option>
            </select>
          </div>
          <SpaceBar />
          <label> Message </label>
          <div>
            <textarea
              name="message"
              rows={4}
              value={message.message}
              onChange={handleChange}
              placeholder="Write your message here"
            />
          </div>
          <div className="edit-footer">
            <button className="primary-btn" onClick={handleSend}>
              {" "}
              Send{" "}
            </button>
          </div>
        </div>

        <div className="contact-map">
          <MapContainer
            center={position}
            style={{ height: "100%" }}
            placeholder={true}
            zoom={11}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
