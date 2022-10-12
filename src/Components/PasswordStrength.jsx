import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function PasswordStrength({ error, label }) {
  const [percen, setPercen] = useState();
  const [color, setColor] = useState("");

  const passwordColor = () => {
    if (label === "Password") {
      if (error === "weak password") {
        setPercen("25%");
        setColor("red");
      } else if (error === "medium password") {
        setPercen("50%");
        setColor("#FF5F15");
      } else if (error === "strong password") {
        setPercen("100%");
        setColor("green");
      }
    }
  };

  useEffect(() => {
    passwordColor();
  }, );
  return (
    <>
      {label === "Password" && (
        <div
          style={{ backgroundColor: color, width: percen, height: "7px",borderRadius:"8px", marginTop:"3px" }}
        ></div>
      )}
    </>
  );
}

export default PasswordStrength;
