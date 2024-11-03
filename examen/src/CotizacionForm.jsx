import React, { useState } from 'react';
import './CotizacionForm.css';

const CotizacionForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    cantidad: '',
    tipoEntrega: '',
    terminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1>UniFood</h1>
        <h2>Cotizar producto</h2>
        <p>Obtén tu cotización personalizada en segundos.</p>
        
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Información de contacto</legend>
            <div className="row">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="form-group">
                <label>Correo</label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Ingresa tu correo"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Información adicional</legend>
            <div className="row">
              <div className="form-group">
                <label>Cantidad de productos</label>
                <input
                  type="number"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  placeholder="Cantidad"
                />
              </div>
              <div className="form-group">
                <label>Tipo de entrega</label>
                <select
                  name="tipoEntrega"
                  value={formData.tipoEntrega}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                  <option value="normal">Normal</option>
                  <option value="rapida">Rápida</option>
                </select>
              </div>
            </div>
          </fieldset>

          <div className="terms">
            <input
              type="checkbox"
              name="terminos"
              checked={formData.terminos}
              onChange={handleChange}
            />
            <label>Acepto los términos y condiciones</label>
          </div>

          <button type="submit" className="submit-button">Enviar cotización</button>
        </form>
      </div>
    </div>
  );
};

export default CotizacionForm;
