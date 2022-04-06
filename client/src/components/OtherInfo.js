import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nazionalità..."
        value={formData.nazionalita}
        onChange={(e) => {
          setFormData({ ...formData, nazionalita: e.target.value });
        }}
        name="nazionalita"
      />
      <input
        type="text"
        placeholder="Altro..."
        value={formData.altro}
        onChange={(e) => {
          setFormData({ ...formData, altro: e.target.value });
        }}
        name="altro"
      />
    </div>
  );
}

export default OtherInfo;
