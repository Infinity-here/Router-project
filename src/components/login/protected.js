import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
let login;
function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    login = JSON.parse(localStorage.getItem("userdata")) ?? [];
    console.log("JK", login);
    if (!login[0]?.mail) {
      navigate("/login");
    }
    console.log(login, "login");
  }, []);

  console.log("asdfg");
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
