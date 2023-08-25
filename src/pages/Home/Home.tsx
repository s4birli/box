import React, { Suspense } from "react";
import "./Home.scss";
import { Outlet } from "react-router-dom";
import Vault from "@/components/Vault";

const Home = () => {
  return (
    <div>
      <Vault />
    </div>
  );
};

export default Home;
