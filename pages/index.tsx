import { useState, useEffect } from "react";
import type { NextPage } from "next";
import App from "../components/app";

const Home: NextPage = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => (window !== undefined ? setLoad(true) : setLoad(false)));
  return load ? <App /> : <div>Loading...</div>;
};

export default Home;
