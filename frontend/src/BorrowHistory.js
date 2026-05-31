import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function BorrowHistory() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/borrow/history", {
      headers: {
        Authorization:
          "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4 min-h-screen bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Borrow History
      </h2>
      <div className="text-center mb-6">
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded"
    onClick={() => navigate("/books")}
  >
    Back to Books
  </button>
</div>

      {history.length === 0 ? (
        <p className="text-center text-gray-500">
          No History Found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {history.map((b) => (
            <div
              key={b._id}
              className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-4 mb-4"
            >
              <img
                src={b.bookId?.image}
                alt={b.bookId?.title}
                className="w-full h-64 object-contain bg-gray-100 rounded-lg p-2"
              />

              <h3 className="text-xl font-bold mt-4 text-center">
                {b.bookId?.title}
              </h3>

              <p className="mt-3">
                <strong>Author:</strong>{" "}
                {b.bookId?.author}
              </p>

              <p>
                <strong>Borrow Date:</strong>{" "}
                {new Date(
                  b.borrowDate
                ).toLocaleDateString()}
              </p>

              <p>
                <strong>Due Date:</strong>{" "}
                {new Date(
                  b.dueDate
                ).toLocaleDateString()}
              </p>

              <p>
                <strong>Return Date:</strong>{" "}
                {b.returnDate
                  ? new Date(
                      b.returnDate
                    ).toLocaleDateString()
                  : "Not Returned"}
              </p>

              <p>
                <strong>Total Cost:</strong> ₹
                {b.totalCost}
              </p>

              <p>
                <strong>Overdue Fine:</strong> ₹
                {b.overdueCost || 0}
              </p>

              <p
                className={`font-bold mt-2 ${
                  b.status === "RETURNED"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Status: {b.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BorrowHistory;