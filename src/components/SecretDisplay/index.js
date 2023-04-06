import React from "react";
import { generateSecret, encrypt } from "../../utils/cryptoUtils";

const SecretDisplay = ({ secret, setSecret }) => {
  const regenerateSecret = () => {
    const newSecret = generateSecret();
    chrome.storage.sync.get(["password"], (result) => {
      const encryptedSecret = encrypt(newSecret, result.password);
      chrome.storage.sync.set({ secret: encryptedSecret }, () => {
        setSecret(newSecret);
      });
    });
  };

  const handleLogout = () => {
    setSecret(null);
  };

  return (
    <div>
      <h2>Your Secret</h2>
      <div>
        <label>Secret: </label>
        <input type="text" value={secret} readOnly />
      </div>
      <button onClick={regenerateSecret}>Regenerate Secret</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SecretDisplay;
