import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <>
      <Header showMenu/>
      {/* <Banner /> */}
      <CoinsTable />
    </>
  );
};

export default Homepage;
