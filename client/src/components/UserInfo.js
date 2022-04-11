import React from "react";

function UserInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <p>
        Nome: <span>{formData.nome}</span>
      </p>
      <p>
        Cognome: <span>{formData.cognome}</span>
      </p>
      <p>
        Username: <span>{formData.username}</span>
      </p>
      <p>
        Email: <span>{formData.email}</span>
      </p>
      <p>
        Password: <span>{formData.password}</span>
      </p>
      <p>
        Nazionalità: <span>{formData.nazionalita}</span>
      </p>
      <p>
        Altro: <span>{formData.altro}</span>
      </p>
    </div>
  );
}

export default UserInfo;
