import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "./layouts";
import Loader from "./components/Loader";
import "./styles/App.scss";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <AnimatePresence>{loading ? <Loader /> : <Layout />}</AnimatePresence>;
};

export default App;
