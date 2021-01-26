import React, { useState, useEffect } from "react";
import { Image, Row, Col, Modal } from "react-bootstrap";

import HappyFace from "../assets/7-icons/happy-face.svg";
import Garbage from "../assets/7-icons/garbage.svg";
import PencilIcon from "../assets/7-icons/pencil.svg";
import CheckedIcon from "../assets/7-icons/checked.svg";
import CloseIcon from "../assets/7-icons/close.svg";
import { Title, SpaceBar } from "../components";
/* cSpell:disable */
import DavidChampion from "../assets/4-people/david-campion.jpg";
import DarleneChabrat from "../assets/4-people/darlene-chabrat.jpg";
import GaetanHoussin from "../assets/4-people/gaetan-houssin.jpg";
import JeromeBoudot from "../assets/4-people/jerome-boudot.jpg";
import JeromeMahuet from "../assets/4-people/jerome-mahuet.jpg";
import ManuelaFaveri from "../assets/4-people/manuela-faveri.jpg";
import NicolasLavarreau from "../assets/4-people/nicolas-lebarreau.jpg";
import RomaneRegad from "../assets/4-people/romane-regad.jpg";
import SylvianSalomon from "../assets/4-people/sylvain-salomon.jpg";
import TaniaFerrerira from "../assets/4-people/tania-ferreira.jpg";
import VincentJoignie from "../assets/4-people/vincent-joignie.jpg";

const allPeople = [
  {
    name: "Frank  Ltarnam",
    designation: "CEO",
    description:
      "System is excellent. It has made my system user experience to become one of the easiest!",
    src: GaetanHoussin,
  },
  {
    name: "Bob Shefley",
    designation: "UI/UX Designer",
    description:
      "I just want to share a quick note and let you know that you guys do a really good job.",
    src: NicolasLavarreau,
  },
  {
    name: "Lucas Bond",
    designation: "Full-Stack Developer",
    description:
      "Now it's almost like having a designer right. I just choose the page, make the changes and save",
    src: JeromeBoudot,
  },

  {
    name: "Darlene Chabrat",
    designation: "UI/UX Designer",
    description:
      "I just want to share a quick note and let you know that you guys do a really good job.",
    src: DarleneChabrat,
  },
  {
    name: "Gaetan Houssin",
    designation: "Full-Stack Developer",
    description:
      "Now it's almost like having a designer right. I just choose the page, make the changes and save",
    src: GaetanHoussin,
  },

  {
    name: "Jerome Mahuet",
    designation: "CEO",
    description:
      "System is excellent. It has made my system user experience to become one of the easiest!",
    src: JeromeMahuet,
  },
  {
    name: "Manuela Faveri",
    designation: "Full-Stack Developer",
    description:
      "Now it's almost like having a designer right. I just choose the page, make the changes and save",
    src: ManuelaFaveri,
  },
  {
    name: "Nicolas Lavarreau",
    designation: "CEO",
    description:
      "System is excellent. It has made my system user experience to become one of the easiest!",
    src: NicolasLavarreau,
  },
  {
    name: "Romane Regad",
    designation: "UI/UX Designer",
    description:
      "I just want to share a quick note and let you know that you guys do a really good job.",
    src: RomaneRegad,
  },
];

const initialViewState = { view: false, person: "" };
function People() {
  const [editMode, setEditMode] = useState(false);
  const [editPerson, setEditPerson] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState(allPeople);
  const [viewPerson, setViewPerson] = useState(initialViewState);
  const [peopleTobeDeleted, setPeopleTobeDeleted] = useState([]);

  const openEdit = (person) => {
    setEditPerson(person);
    setShowModal(true);
  };

  const closeEdit = () => {
    setEditPerson("");
    setShowModal(false);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setPeopleTobeDeleted([]);
  };

  const handleDeleteClick = (i) => {
    let tempRef = [...peopleTobeDeleted];
    let idx = tempRef.findIndex((d) => d === i);
    if (idx > -1) {
      tempRef.splice(idx, 1);
    } else {
      tempRef.push(i);
    }
    setPeopleTobeDeleted(tempRef.sort((a, b) => a - b));
  };

  const openViewPerson = (i) => {
    setViewPerson({
      view: true,
      person: people[i],
    });
  };

  const closeViewPerson = () => {
    setViewPerson(initialViewState);
  };

  const deletePeople = () => {
    const refPeople = [...people];
    if (peopleTobeDeleted.length) {
      for (let i = peopleTobeDeleted.length - 1; i >= 0; i--) {
        refPeople.splice(peopleTobeDeleted[i], 1);
      }
      setPeople(refPeople);
      setPeopleTobeDeleted([]);
    }
  };

  return (
    <div className="content-box">
      <div className="people-slider-box">
        <div className="people-slider-title-container">
          <Row style={{ width: "100%" }}>
            <Col sm={12} md={6}>
              <div className="people-opinion-wrapper">
                <div className="happyFaceIcon">
                  <img src={HappyFace} alt="happyface" />
                </div>
                <Title> Our important people is listed here </Title>
              </div>
            </Col>
            <Col sm={12} md={6}>
              {editMode ? (
                <div className="people-opinion-wrapper-right">
                  <button className="cancel-btn" onClick={toggleEditMode}>
                    {" "}
                    Cancel{" "}
                  </button>{" "}
                  <div className="garbageIcon" onClick={deletePeople}>
                    {" "}
                    <img src={Garbage} alt="garbageIcon" />{" "}
                  </div>
                </div>
              ) : (
                <div className="people-opinion-wrapper-right">
                  <button className="edit-Btn" onClick={toggleEditMode}>
                    {" "}
                    Edit{" "}
                  </button>
                  <button className="add-Btn"> Add </button>
                </div>
              )}
            </Col>
          </Row>
        </div>

        <div className="people-display-container">
          {people.map((p, i) => (
            <div
              className="people-card"
              key={i}
              onClick={() => {
                editMode ? handleDeleteClick(i) : openViewPerson(i);
              }}
            >
              <Image src={p.src} rounded height="200px" />
              {!editMode ? (
                <div className="editIcon">
                  {" "}
                  <img src={PencilIcon} alt="PencilIcon" />{" "}
                </div>
              ) : (
                <div
                  className={
                    peopleTobeDeleted.includes(i)
                      ? "checked-icon-active"
                      : "checked-icon-inactive"
                  }
                >
                  {" "}
                  <img src={CheckedIcon} alt="checkedIcon" />{" "}
                </div>
              )}
              <div className="title">{p.name}</div>
              <div className="designation"> {p.designation} </div>
            </div>
          ))}
        </div>

        {/* TODO here */}
      </div>

      {viewPerson && viewPerson.view ? (
        <Modal show={viewPerson.view} onHide={closeViewPerson} centered>
          <div className="view-person-container">
            <Image
              src={viewPerson.person.src}
              alt="persons"
              rounded
              height="180"
            />
            <div className="view-person-content">
              <h4>{viewPerson.person.name}</h4>
              <p> {viewPerson.person.designation} </p>
              <div> {viewPerson.person.description} </div>
            </div>
            <img
              src={CloseIcon}
              alt="closeIcon"
              className="closeViewIcon"
              onClick={closeViewPerson}
            />
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}

export default People;
