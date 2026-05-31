import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./Login";
import Books from "./Books";
import ActiveBorrow from "./ActiveBorrow";
import BorrowHistory from "./BorrowHistory";
import Cart from "./Cart";
import { CartContext } from "./CartContext";

function App() {
  const token = localStorage.getItem("token");
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Router>
   <h1 className="text-4xl font-bold text-right text-blue-600 py-4 bg-gray-800 shadow">Cart ({totalItems})
</h1>
    

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

        <Route
          path="/history"
          element={token ? <BorrowHistory /> : <Navigate to="/" />}
        />

        <Route
          path="/cart"
          element={token ? <Cart /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;