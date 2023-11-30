import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const isNombreValid = nombre.length > 5 && nombre.trim() && isNaN(nombre);
    const isNombreValid2 = isNaN(nombre);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Actualizar el estado es valido
    setIsValid(isNombreValid && isEmailValid && isNombreValid2);

    setTimeout(() => {
      setNombre('');
      setEmail('');
    }, 3000);
    setTimeout(() => {
      setIsValid(null)
    }, 8000);
  };

  return (
    <div className="container_inputs">
      <form onSubmit={handleSubmit}>
        <label>
          <span><FontAwesomeIcon icon={faUser} /> Nombre completo:</span>
          <input
            type="text"
            name="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
        <span><FontAwesomeIcon icon={faEnvelope} /> Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      
      {/* Mostrar mensajes según el estado del formulario */}
      {isValid !== null && (
        isValid ? (
          <p style={{ textAlign: "center", color: "green", fontSize: "16px" }}>¡Formulario válido y enviado con éxito!</p>
        ) : (
          <p style={{ textAlign: "center", color: "red", fontSize: "16px" }}>Por favor, completa los campos correctamente.</p>
        )
      )}
    </div>
  );
};

export default Form;