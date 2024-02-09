import React from "react";
import { SavedShows } from "./SavedShows";

export const Account = () => {
  return (
    <div className=" w-100 text-white">
      <img
        className="img-account w-100"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/c214d48d-ad5a-498c-af77-3976ff344e1b/FR-fr-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Beaucoup de films"
      />
      <div className="back-dark position-absolute top-0 left-0 w-100 "></div>
      <div className="title-container position-absolute p-5">
        <h1 className="font-weight-bold">My favorites</h1>
      </div>
      <SavedShows />
    </div>
  );
};
