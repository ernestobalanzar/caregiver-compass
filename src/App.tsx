import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
