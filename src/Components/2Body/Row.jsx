import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import { Movie } from "./Movie";

export const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider " + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider " + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section
      className="section-row mt-4 col-12 align-self-center"
      style={{ height: "250px" }}
    >
      <h2 className="text-white p-4">{title}</h2>
      <article className="article-movies position-relative d-flex align-items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="arrow bg-white rounded-circle position-absolute start-0 "
          size={40}
        />
        <div
          id={"slider " + rowID}
          className="movies-container position-relative w-100 h-100"
        >
          {movies.map((item, index) => {
            return <Movie key={index} item={item} />;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="arrow bg-white rounded-circle position-absolute end-0 "
          size={40}
        />
      </article>
    </section>
  );
};
