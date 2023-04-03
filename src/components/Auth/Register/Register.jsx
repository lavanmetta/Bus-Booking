import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const redirect = useNavigate();

  const [details, setDetails] = useState({ email: "", password: "" });

  const onEmailChange = (e) => {
    setDetails({ ...details, email: e.target.value });
  };

  const onPasswordChange = (e) => {
    setDetails({ ...details, password: e.target.value });
  };

  let i = Math.floor(Math.random() * 6);
  function tokenGenerator() {
    const { email } = details;

    let numbers = "AE34ER#7&*%@!";
    let token = "CUSTOM-TOKEN-";

    for (let j = 0; j < 8; j++) {
      token += email[i] + numbers[i + j] + email[i + j];
    }
    return token;
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("c-token", JSON.stringify(tokenGenerator()));
    redirect('/')
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitForm}>
        <div>
          <input type="email" onChange={onEmailChange} />
          <input type="password" onChange={onPasswordChange} />
          <input type="submit" />
        </div>
      </form>
    </React.Fragment>
  );
}

export default Register;
