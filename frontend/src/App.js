import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Books from "./Books";
import ActiveBorrow from "./ActiveBorrow";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <h1>Smart Library</h1>

      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/books" /> : <Login />}
        />

        <Route
          path="/books"
          element={token ? <Books /> : <Navigate to="/" />}
        />

        <Route
          path="/active"
          element={token ? <ActiveBorrow /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;