import React from "react";

function SignUp({
  handleChange,
  validatePassword,
  password,
  username,
  age,
  profilePic,
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
          Password
          <input name="validatePassword" value={validatePassword} />
        </label>
        <label>
          age
          <input name="age" type="number" value={age} />
        </label>
        <label>
          Profile Pic
          <input name="profilePic" type="text" value={profilePic} />
        </label>
		<input type="submit"/>
      </form>
    </>
  );
}

export default SignUp;
