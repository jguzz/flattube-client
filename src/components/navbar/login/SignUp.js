import React from "react";

function SignUp({
  handleChange,
  validatePassword,
  password,
  username,
  age,
  img,
  name,
  handleSignUp
}) {
  return (
    <>
      <form onChange={handleChange} onSubmit={handleSignUp}>
        SignUp
        <label>
          Username
          <input name="username" type="text" value={username} />
        </label>
        <label>
          Password
          <input name="password" value={password} />
        </label>
        <label>
          Validate Password
          <input name="validatePassword" value={validatePassword} />
        </label>
		<label>
          Name
          <input name="name" type="text" value={name} />
        </label>
        <label>
          age
          <input name="age" type="number" value={age} />
        </label>
        <label>
          Profile Pic
          <input name="img" type="text" value={img} />
        </label>
		<input type="submit"/>
      </form>
    </>
  );
}

export default SignUp;
