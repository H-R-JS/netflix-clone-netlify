import React from "react";
import videoTrailer from "./trailer.mp4";

export const Trailer = () => {
  return (
    <section className="trailer-video">
      <video controls src={videoTrailer} className="video" />
    </section>
  );
};
