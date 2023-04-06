import { RingLoader } from "react-spinners";

import React from "react";

const Loading = ({ isLoading }) => {
  return <RingLoader size={50} color={"#4caf50"} loading={isLoading} />;
};

export default Loading;
