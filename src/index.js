import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Diese Art des Aufrufs ist veraltet und wird ab react v18 nicht mehr unterstützt, ReactDOM.render(
    <App />,document.getElementById('root')
); */