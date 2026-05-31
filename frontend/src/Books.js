import React, {
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

function Books() {
  const [category, setCategory] = useState("");
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 4;
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);

  const handleBorrow = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://127.0.0.1:5000/borrow",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            bookId: id,
            days: 3,
          }),
        }
      );

      const data = await res.json();

      alert(data.msg);

      if (res.ok) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        (book.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
          book.author
            .toLowerCase()
            .includes(search.toLowerCase())) &&
        (category === "" || book.category === category)
    );
  }, [books, search, category]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const currentBooks = filteredBooks.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  const totalPages = Math.ceil(
    filteredBooks.length / booksPerPage
  );

  const totalBooks = books.length;

  const availableBooks = books.filter(
    (b) => b.isAvailable
  ).length;

  const borrowedBooks = books.filter(
    (b) => !b.isAvailable
  ).length;

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen bg-gray-950 text-white">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Smart Library
      </h2>

      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-5 rounded-lg shadow text-center">
          <h3 className="text-3xl font-bold">
            {totalBooks}
          </h3>
          <p>Total Books</p>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-lg shadow text-center">
          <h3 className="text-3xl font-bold">
            {availableBooks}
          </h3>
          <p>Available Books</p>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-lg shadow text-center">
          <h3 className="text-3xl font-bold">
            {borrowedBooks}
          </h3>
          <p>Borrowed Books</p>
        </div>
      </div>

      {/* Search */}
      <input
        className="border border-gray-700 bg-gray-900 text-white p-3 rounded w-full mb-4"
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* Category */}
      <select
        className="border border-gray-700 bg-gray-900 text-white p-3 rounded mb-6"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="">All Categories</option>
        <option value="Finance">Finance</option>
        <option value="Self Help">Self Help</option>
        <option value="Productivity">Productivity</option>
        <option value="Novel">Novel</option>
      </select>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/active")}
        >
          Active Borrow
        </button>

        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/history")}
        >
          Borrow History
        </button>

        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/cart")}
        >
          Cart
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      {/* Books */}
      {currentBooks.length === 0 ? (
        <p className="text-center text-gray-500">
          No books found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentBooks.map((b) => (
            <div
              key={b._id}
              className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-64 object-contain bg-gray-100 rounded-lg p-2"
              />

              <h3 className="text-xl font-bold mt-3">
                {b.title}
              </h3>

              <p className="text-gray-600">
                Author: {b.author}
              </p>

              <p className="text-yellow-500 font-semibold">
                ⭐ {b.rating}
              </p>

              <p>Category: {b.category}</p>

              <p className="text-green-600 font-bold">
                ₹{b.pricePerDay}/day
              </p>

              <p
                className={`font-semibold ${
                  b.isAvailable
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {b.isAvailable
                  ? "Available"
                  : "Borrowed"}
              </p>

              <button
                className="bg-green-500 text-white px-4 py-2 rounded w-full mt-3 hover:bg-green-600"
                onClick={() => addToCart(b)}
              >
                Add To Cart
              </button>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-blue-600 disabled:bg-gray-400"
                disabled={!b.isAvailable}
                onClick={() => handleBorrow(b._id)}
              >
                Borrow Book
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mr-3 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded ml-3 disabled:opacity-50"
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Books;