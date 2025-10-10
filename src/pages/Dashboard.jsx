import React from "react";
import GridLayout from "../components/layout/GridLayout";
import Blocks from "../components/Blocks/Blocks";
import Stats from "../components/Stats";
import Charts from "../components/Charts";
import Footer from "../components/layout/Footer";

export default function Dashboard() {
  return (
    <>
      <GridLayout>
        <Blocks />
        <Stats />
        <Charts />
      </GridLayout>
      <Footer />
    </>
  );
}
