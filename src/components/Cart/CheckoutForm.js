import React, { useState } from "react";

export default function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(userData);

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }

  function clearForm() {
    setUserData({
      name: "",
      email: "",
      phone: "",
    });
  }

  function submitData(){
    props.onSubmit(userData)
  }

  return (
    <div>
      <h5 style={{display: "flex", justifyContent: "center"}}>Completa tus datos para finalizar la compra</h5>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input
          value={userData.name}
          name="name"
          type="text"
          required
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input
          value={userData.email}
          name="email"
          type="email"
          required
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Phone</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"
          required
          onChange={handleChange}
        />
      </div>
      <button disabled={
          !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
          )
        }
        onClick={submitData}>
        Crear orden
      </button>
      <button className="deleteButton" style={{marginLeft:"10px"}} onClick={clearForm}>Limpiar form</button>
    </div>
  );
}