import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

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

  const FormTitles = [
    "Credenziali di accesso",
    "Informazioni personali",
    "Altro",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <form className="form" method="post" action="/nuovoutente">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }} //Dimensione progress
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <a
            //disabilitato nella prima pagina
            onClick={() => {
              if (page > 0) {
                setPage((currPage) => currPage - 1);
              }
            }}
          >
            Indietro
          </a>

          {page === FormTitles.length - 1 ? (
            <button type="submit">Concludi</button>
          ) : (
            <a
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
            </a>
          )}
        </div>
      </div>
    </form>
  );
}

export default Form;
