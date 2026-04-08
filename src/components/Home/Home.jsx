import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import Books from "./Books/Books";

function Home() {
  const data = useLoaderData();

  return (
    <div className=" max-w-360 px-2.5 mx-auto ">
      <Banner />
      <Books data={data} />
    </div>
  );
}

export default Home;
