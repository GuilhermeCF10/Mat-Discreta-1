import React from "react";
import "./App.css";

// Hooks
import { GeneralProvider } from "Hooks/general";

// Routes
import Routes from "Routes/index.routes";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <GeneralProvider>
      <Router>
        <Routes />
      </Router>
    </GeneralProvider>
  );
};

export default App;
