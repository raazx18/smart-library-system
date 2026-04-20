import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleBorrow = async (id) => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://127.0.0.1:5000/borrow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ bookId: id, days: 3 }),
    });

    const data = await res.json();
    alert(data.msg);
  };

  return (
    <div>
      <h2>Books</h2>

      <button onClick={() => navigate("/active")}>
        Go to Active Borrow
      </button>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </button>

      {books.map((b) => (
        <div key={b._id}>
          <h3>{b.title}</h3>
          <p>{b.author}</p>
          <p>₹{b.pricePerDay}</p>
          <button onClick={() => handleBorrow(b._id)}>Borrow</button>
        </div>
      ))}
    </div>
  );
}

export default Books;