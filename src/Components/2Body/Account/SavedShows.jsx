import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useAuth } from "../../Context/useAuth";

export const SavedShows = () => {
  const [movies, setMovies] = useState([]);

  const [classSlider, setClassSlider] = useState("movies-container-ss");
  const { auth } = useAuth();

  const email = auth?.email;
  const getData = async () => {
    await axios
      .post("https://clone-netflix-77383829fc51.herokuapp.com/dataFavorite", {
        email,
      })
      .then((res) => {
        const result = res.data.result;
        setMovies([...result]);
      });
  };

  const deleteData = async (id) => {
    await axios
      .post("https://clone-netflix-77383829fc51.herokuapp.com/deleteFavorite", {
        id,
      })
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const moviesSort = async () => {
    // function compare title
    function compareByTitle(a, b) {
      return a.title.localeCompare(b.title);
    }
    setClassSlider("movies-container-ss hidden");
    setTimeout(() => {
      setClassSlider("movies-container-ss");
      movies.sort(compareByTitle);
    }, 500);
  };

  return (
    <section>
      <button onClick={moviesSort} className="btn-sort">
        A - Z
      </button>
      {movies.length > 0 ? (
        <article className="article-movies position-relative d-flex align-items-center">
          <div className={classSlider}>
            {movies?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="movie d-inline-block position-relative m-2"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                    alt={item?.title}
                  />
                  <div className="img-info position-absolute top-0 left-0 w-100 h-100 p-2 text-white ">
                    <p className="d-flex justify-content-center h-100 align-items-center text-center">
                      {item?.title}
                    </p>
                    <p
                      onClick={() => deleteData(item.id)}
                      className="icon-delete position-absolute"
                    >
                      <AiOutlineClose />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      ) : (
        <article className="empty">
          <p>Favorites are empty</p>
        </article>
      )}
    </section>
  );
};
