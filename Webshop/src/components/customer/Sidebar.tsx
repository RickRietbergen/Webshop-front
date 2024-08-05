import { useState } from "react";
import "../App.scss";
import "../index.css";

function CustomerDashboard() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dashboard">
        <div className="block"></div>
      </div>
    </>
  );
}

export default CustomerDashboard;
