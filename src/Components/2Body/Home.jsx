import React from "react";
import { BigPage } from "./BigPage";
import { Row } from "./Row";
import { request } from "../../Request";

export const Home = () => {
  return (
    <main className="main-home w-100 ">
      <BigPage />
      <section className="container-fluid row ">
        <Row rowID="1" title="Up Coming" fetchURL={request.requestUpComing} />
        <Row rowID="2" title="Popular" fetchURL={request.requestPopular} />
        <Row rowID="3" title="Trending" fetchURL={request.requestTrending} />
        <Row rowID="4" title="Top Rated" fetchURL={request.requestTopRated} />
      </section>
    </main>
  );
};
