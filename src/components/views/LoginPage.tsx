"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LoginCredentials } from "@/types";
import { useRouter } from "next/navigation";
import { handleLogIn } from "@/utils";

const LoginPage = () => {
  const navigate = useRouter();
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e: any) => {
    //console.log(e.target.email.value, "pretzi")
    e.preventDefault();

    let inputEmail = e.target.email.value;
    let inputPassword = e.target.password.value;
    let userCredentials = {
      email: inputEmail,
      password: inputPassword,
    };

    const data = await handleLogIn(userCredentials);

    if (!data) {
      setLoginError(true);
    } else {
      setLoginError(false);
      navigate.push("/profile");
    }
  };

  return (
    <div>
      <h1>Log in</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="E-mail address" />
        <input name="password" type="text" placeholder="Password" />
        {loginError ? (
          <p>Incorrect Log in Information! Please try again.</p>
        ) : null}
        <button type="submit">Log in</button>
      </form>
      <Link href={"/register"}>Dont have an account? Create one here!</Link>
    </div>
  );
};

export default LoginPage;
