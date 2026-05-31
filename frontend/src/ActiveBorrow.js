import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ActiveBorrow() {
  const [borrow, setBorrow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/borrow/active", {
      headers: {
        Authorization:
          "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setBorrow(data))
      .catch((err) => console.log(err));
  }, []);

  const handleReturn = async () => {
    const res = await fetch(
      "http://127.0.0.1:5000/borrow/return",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    const data = await res.json();

    alert(
      `${data.msg}\nFine: ₹${data.borrow?.overdueCost || 0}`
    );

    navigate("/books");
  };

  if (!borrow) {
    return (
      <h3 className="text-center mt-10 text-xl">
        No Active Borrow
      </h3>
    );
  }

  const daysRemaining = Math.ceil(
    (new Date(borrow.dueDate) - new Date()) /
      (1000 * 60 * 60 * 24)
  );

  return (
  <div className="min-h-screen bg-gray-950 text-white py-10">

    <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-6">

      {/* All your existing content */}

    </div>
);
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-4">
        Active Borrow
      </h2>
      <div className="text-center mb-4">
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded"
    onClick={() => navigate("/books")}
  >
    Back to Books
  </button>
</div>

      <img
        src={borrow.bookId?.image}
        alt={borrow.bookId?.title}
        className="w-full h-64 object-contain bg-gray-800 rounded-lg p-2"
      />

      <h3 className="text-xl font-bold mt-4 text-center">
        {borrow.bookId?.title}
      </h3>

      <p className="mt-3">
        <strong>Author:</strong>{" "}
        {borrow.bookId?.author}
      </p>

      <p>
        <strong>Borrow Date:</strong>{" "}
        {new Date(
          borrow.borrowDate
        ).toLocaleDateString()}
      </p>

      <p>
        <strong>Due Date:</strong>{" "}
        {new Date(
          borrow.dueDate
        ).toLocaleDateString()}
      </p>

      <p>
        <strong>Days Remaining:</strong>{" "}
        {daysRemaining}
      </p>

      <p>
        <strong>Total Cost:</strong> ₹
        {borrow.totalCost}
      </p>

      {daysRemaining < 0 && (
        <p className="text-red-600 font-bold mt-2">
          ⚠ Book is overdue
        </p>
      )}

      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full mt-5"
        onClick={handleReturn}
      >
        Return Book
      </button>
    </div>
  );
}

export default ActiveBorrow;