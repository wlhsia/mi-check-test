import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AppBar from "./components/AppBar.jsx";

function App() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}

export default App;
