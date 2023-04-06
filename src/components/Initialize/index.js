import React, { useState } from "react";
import { generateSecret, encrypt } from "../../utils/cryptoUtils";

const Initialize = ({ setInitialized }) => {
  const [secret, setSecret] = useState(generateSecret());
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const encryptedSecret = encrypt(secret, password);
      chrome.storage.sync.set(
        { secret: encryptedSecret, password, isInitialized: true },
        () => {
          setInitialized(true);
        }
      );
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    // Your form implementation goes here
    <div>
      <h2>Initialize Secret Manager</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your secret: </label>
          <input type="text" value={secret} readOnly />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Initialize</button>
      </form>
    </div>
  );
};

export default Initialize;
