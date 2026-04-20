import React, { useEffect, useState } from "react";

function ActiveBorrow() {
  const [borrow, setBorrow] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/borrow/active", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setBorrow(data));
  }, []);

  const handleReturn = async () => {
    const res = await fetch(
      `http://127.0.0.1:5000/borrow/${borrow._id}/submit`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    const data = await res.json();
    alert(data.msg);
    window.location.reload();
  };

  if (!borrow) return <p>No active borrow</p>;

  return (
    <div>
      <h2>Active Borrow</h2>
      <p>{borrow.bookTitle}</p>

      <button onClick={handleReturn}>Return Book</button>
    </div>
  );
}

export default ActiveBorrow;