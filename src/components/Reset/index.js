import React from "react";

const Reset = ({ setInitialized }) => {
  const handleReset = () => {
    chrome.storage.sync.clear(() => {
      chrome.runtime.reload();
      setInitialized(false);
    });
  };

  return (
    <div>
      <h2>Reset Extension</h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Reset;
