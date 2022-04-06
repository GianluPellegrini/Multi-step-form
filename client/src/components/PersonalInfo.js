import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Nome..."
        value={formData.nome}
        onChange={(e) => {
          setFormData({ ...formData, nome: e.target.value });
        }}
        name="nome"
      />
      <input
        type="text"
        placeholder="Cognome..."
        value={formData.cognome}
        onChange={(e) => {
          setFormData({ ...formData, cognome: e.target.value });
        }}
        name="cognome"
      />
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        name="username"
      />
    </div>
  );
}

export default PersonalInfo;
