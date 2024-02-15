import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaPlayCircle } from "react-icons/fa";
import { useAuth } from "../Context/useAuth";
import axios from "axios";

export const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const { auth } = useAuth();

  const saveShow = async () => {
    const id = item.id;
    const img = item.backdrop_path;
    const title = item.title;
    const emailUser = auth?.email;
    if (auth?.email) {
      await axios
        .post("/addFavorite", {
          emailUser,
          id,
          img,
          title,
        })
        .then((response) => {
          if (response?.data?.message) {
            alert(response.data.message);
          } else {
            setLike(!like);
            console.log(response);
          }
        });
    } else {
      alert("Veuillez vous connecter pour mettre un film en favori .");
    }
  };

  return (
    <article className="movie d-inline-block position-relative m-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />

      <div className="img-info position-absolute top-0 left-0 w-100 h-100 p-2 text-white ">
        <p className="d-flex justify-content-center h-75 align-items-center text-center">
          {item?.title}
        </p>
        <Link to="/trailer" className="play-container">
          <FaPlayCircle className="play" />
        </Link>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="icon-heart position-absolute text-gray" />
          ) : (
            <FaRegHeart className="icon-heart position-absolute text-gray" />
          )}
        </p>
      </div>
    </article>
  );
};
