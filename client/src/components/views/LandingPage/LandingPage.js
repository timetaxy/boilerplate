import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("api/test").then((response) => console.log(response.data));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItens: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>LandingPage</h2>
    </div>
  );
}
export default LandingPage;
