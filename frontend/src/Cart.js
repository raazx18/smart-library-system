import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
        My Cart
      </h2>

      <div className="text-center mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/books")}
        >
          Back to Books
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Cart is Empty
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-contain bg-gray-100 rounded-lg"
              />

              <h3 className="text-xl font-bold mt-3">
                {item.title}
              </h3>

              <p>
                <strong>Author:</strong> {item.author}
              </p>

              <p className="text-yellow-500">
                ⭐ {item.rating}
              </p>

              <p className="text-green-600 font-bold">
                ₹{item.pricePerDay}/day
              </p>

              <p className="mt-2">
                <strong>Quantity:</strong>{" "}
                {item.quantity}
              </p>

              <div className="flex gap-2 mt-3">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() =>
                    increaseQty(item._id)
                  }
                >
                  +
                </button>

                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() =>
                    decreaseQty(item._id)
                  }
                >
                  -
                </button>
              </div>

              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full mt-4"
                onClick={() =>
                  removeFromCart(item._id)
                }
              >
                Remove Item
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;