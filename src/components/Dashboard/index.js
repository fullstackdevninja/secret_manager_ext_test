import React, { useState, useEffect } from "react";
import Initialize from "../Initialize";
import Reset from "../Reset";
import SecretDisplay from "../SecretDisplay";
import SignIn from "../SignIn";

const Dashboard = () => {
  const [isInitialized, setInitialized] = useState(false);
  const [secret, setSecret] = useState(null);

  useEffect(() => {
    chrome.storage.sync.get(["isInitialized"], (result) => {
      setInitialized(result.isInitialized || false);
    });
  });

  return (
    <div>
      {!isInitialized && <Initialize setInitialized={setInitialized} />}
      {isInitialized && !secret && <SignIn setSecret={setSecret} />}
      {isInitialized && secret && (
        <div>
          <SecretDisplay secret={secret} setSecret={setSecret} />
          <Reset setInitialized={setInitialized} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
