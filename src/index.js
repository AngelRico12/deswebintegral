import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componentes/App'; // Asegúrate de que el nombre y ruta coincidan

// Si usas Bootstrap vía CDN en el HTML, no es necesario importarlo aquí, pero puedes hacerlo si prefieres:
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
