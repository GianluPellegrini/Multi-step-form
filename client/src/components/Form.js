import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import UserInfo from "./UserInfo";
import MongoService from "../services/fetch";

function Form() {
  const [page, setPage] = useState(0); //Gestisce le pagine
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nome: "",
    cognome: "",
    username: "",
    nazionalita: "",
    altro: "",
  });

  const addUser = async (formData) => {
    console.log(formData);
    await MongoService.addUser(formData);
  };

  const FormTitles = [
    "Credenziali di accesso",
    "Informazioni personali",
    "Altro",
    "Conferma",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <UserInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }} //Dimensione progress
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            //disabilitato nella prima pagina
            onClick={() => {
              if (page > 0) {
                setPage((currPage) => currPage - 1);
              }
            }}
          >
            Indietro
          </button>

          {page === FormTitles.length - 1 ? (
            <button type="button" onClick={() => addUser(formData)}>
              Concludi
            </button>
          ) : (
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("Ora sei iscritto");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              Prossimo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
