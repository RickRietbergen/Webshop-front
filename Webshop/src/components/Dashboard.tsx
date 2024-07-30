import { useState } from "react";
import "../App.scss";
import "../index.css";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dashboard">
        <div className="block"></div>
      </div>
    </>
  );
}

export default Dashboard;
