import React, { useState, useRef, useEffect } from "react";
import { Image, Row, Col, Modal } from "react-bootstrap";

import HappyFace from "../assets/7-icons/happy-face.svg";
import Garbage from "../assets/7-icons/garbage.svg";
import UserIcon from "../assets/7-icons/user.svg";
import PencilIcon from "../assets/7-icons/pencil.svg";
import CheckedIcon from "../assets/7-icons/checked.svg";
import CloseIcon from "../assets/7-icons/close.svg";
import { Title, SpaceBar } from "../components";
/* cSpell:disable */
import DarleneChabrat from "../assets/4-people/darlene-chabrat.jpg";
import GaetanHoussin from "../assets/4-people/gaetan-houssin.jpg";
import JeromeBoudot from "../assets/4-people/jerome-boudot.jpg";
import JeromeMahuet from "../assets/4-people/jerome-mahuet.jpg";
import ManuelaFaveri from "../assets/4-people/manuela-faveri.jpg";
import NicolasLavarreau from "../assets/4-people/nicolas-lebarreau.jpg";
import RomaneRegad from "../assets/4-people/romane-regad.jpg";

const allPeople = [
  {
    name: "Frank  Ltarnam",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: GaetanHoussin,
  },
  {
    name: "Bob Shefley",
    designation: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: NicolasLavarreau,
  },
  {
    name: "Lucas Bond",
    designation: "Full-Stack Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: JeromeBoudot,
  },

  {
    name: "Darlene Chabrat",
    designation: "Devops Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: DarleneChabrat,
  },

  {
    name: "Jerome Mahuet",
    designation: "Product Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: JeromeMahuet,
  },
  {
    name: "Manuela Faveri",
    designation: "Marketing Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: ManuelaFaveri,
  },
  {
    name: "Romane Regad",
    designation: "HR Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: RomaneRegad,
  },
];

const initialViewState = { view: false, person: "" };
const initialEditState = {
  view: false,
  person: {
    name: "",
    description: "",
    designation: "",
    src: "",
  },
};

function People() {
  const imageRef = useRef();

  const [editMode, setEditMode] = useState(false);
  const [editPerson, setEditPerson] = useState(initialEditState);
  const [people, setPeople] = useState(allPeople);
  const [viewPerson, setViewPerson] = useState(initialViewState);
  const [peopleTobeDeleted, setPeopleTobeDeleted] = useState([]);
  const [selectedFile, setSelectedFile] = useState();

  const showOpenFileDialog = () => {
    imageRef.current.click();
  };

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      const { person, idx } = editPerson;
      person["src"] = objectURL;
      setEditPerson({
        person,
        idx,
        view: true,
      });
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);

  const openEdit = (person, idx) => {
    setEditPerson({
      view: true,
      idx,
      person: { ...person },
    });
  };

  const closeEdit = () => {
    setEditPerson(initialEditState);
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

  const handleChangeEdit = (e) => {
    const { person, idx } = editPerson;
    person[e.target.name] = e.target.value;
    setEditPerson({
      person,
      idx,
      view: true,
    });
  };

  const deleteImage = () => {
    const { person, idx } = editPerson;
    person["src"] = "";
    setEditPerson({
      person,
      idx,
      view: true,
    });
  };

  const savePerson = () => {
    const { person, idx } = editPerson;
    if (!person.name || !person.designation) {
      return alert("Please fill name and designation");
    }
    if (idx !== undefined) {
      people[idx] = { ...person };
    } else {
      setPeople([...people, person]);
    }
    setEditPerson(initialEditState);
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
                  <button
                    className="add-Btn"
                    onClick={() => openEdit(initialEditState)}
                  >
                    {" "}
                    Add{" "}
                  </button>
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
              <Image src={p.src || UserIcon} rounded height="200px" />
              {!editMode ? (
                <div
                  className="editIcon"
                  onClick={(e) => {
                    e.stopPropagation();
                    openEdit(p, i);
                  }}
                >
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
      </div>

      {viewPerson && viewPerson.view ? (
        <Modal show={viewPerson.view} onHide={closeViewPerson} centered>
          <div className="view-person-container">
            <Image
              src={viewPerson.person.src || UserIcon}
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

      {editPerson && editPerson.view ? (
        <Modal show={editPerson.view} onHide={closeEdit} size="sm" centered>
          <div className="edit-person-container">
            <img
              src={CloseIcon}
              alt="closeIcon"
              className="closeViewIcon"
              onClick={closeEdit}
            />
            <h5>
              {editPerson.idx !== undefined ? "Edit People" : "Add People"}{" "}
            </h5>
            <div className="edit-img-container">
              <React.Fragment>
                <div style={{ position: "relative", width: "fit-content" }}>
                  {editPerson.person.src ? (
                    <Image
                      src={editPerson.person.src || UserIcon}
                      roundedCircle
                      height="100"
                      width="100"
                      className="imagePlaceholder"
                      alt="person"
                    />
                  ) : (
                    <div className="userIcon">
                      {" "}
                      <img src={UserIcon} alt="PencilIcon" />{" "}
                    </div>
                  )}
                  <div className="editImageIcon">
                    {" "}
                    <img
                      src={PencilIcon}
                      alt="PencilIcon"
                      onClick={showOpenFileDialog}
                    />{" "}
                  </div>
                </div>
                {editPerson.person.src ? (
                  <div className="delete-block" onClick={deleteImage}>
                    <div className="garbageIconMini">
                      <img src={Garbage} alt="garbageIcon" />
                    </div>{" "}
                    <span>Delete Picture </span>
                  </div>
                ) : (
                  ""
                )}
              </React.Fragment>
            </div>

            <div>
              <label> Name </label>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={editPerson.person.name}
                  onChange={handleChangeEdit}
                />
              </div>
              <SpaceBar />
              <label> Position </label>
              <div>
                <input
                  type="text"
                  name="designation"
                  placeholder="Enter Position in the company"
                  value={editPerson.person.designation}
                  onChange={handleChangeEdit}
                />
              </div>
              <SpaceBar />
              <label> Description </label>
              <div>
                <textarea
                  rows={3}
                  placeholder="Please describe about the person."
                  name="description"
                  value={editPerson.person.description}
                  onChange={handleChangeEdit}
                />
              </div>
              <SpaceBar />
              <div className="edit-footer">
                <button className="cancel-btn" onClick={closeEdit}>
                  {" "}
                  Cancel{" "}
                </button>
                <button className="primary-btn" onClick={savePerson}>
                  {" "}
                  Save{" "}
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}

      <input
        ref={imageRef}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleChangeImage}
      />
    </div>
  );
}

export default People;
