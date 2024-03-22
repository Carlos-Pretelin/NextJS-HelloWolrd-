"use client"
import { useState } from "react";
import { User } from "@/types";
import { registerUser, fetchUserData } from "@/utils";

const RegisterForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    lastName: "",
    age: 0,
    email: "",
    password: "",
  });

  const [registerError, setRegisterError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: name === "edad" ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando usuario:", user);
    const data = await registerUser(user);
    if (!data) {
      setRegisterError(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={user.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        {registerError ? (
          <p>This e-mail is already register. Please try again!</p>
        ) : null}
        <button type="submit">Continue</button>
      </form>
      <button onClick={() => fetchUserData()}>Check Users</button>
    </div>
  );
};

export default RegisterForm;
