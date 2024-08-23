import { useState } from "react";
import "../../App.scss";
import "../../index.css";
import CustomerSidebar from "./Sidebar";

function CustomerDashboard() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="customer_dashboard">
        <CustomerSidebar />
        <div className="dashboard"></div>
      </div>
    </>
  );
}

export default CustomerDashboard;
