import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  useEffect(() => {
    axios.get("api/test").then((response) => console.log(response.data));
  }, []);
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response.data);
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("fail logout");
      }
    });
  };
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
      <button onClick={onClickHandler}>logout</button>
    </div>
  );
}
export default withRouter(LandingPage);
