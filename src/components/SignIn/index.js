import React, { useState } from "react";
import { decrypt } from "../../utils/cryptoUtils";

const SignIn = ({ setSecret }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    chrome.storage.sync.get(["secret"], (result) => {
      try {
        const decryptedSecret = decrypt(result.secret, password);

        if (decryptedSecret) {
          setSecret(decryptedSecret);
        } else {
          alert("Incorrect password.");
        }
      } catch (error) {
        alert("Incorrect password.");
      }
    });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
