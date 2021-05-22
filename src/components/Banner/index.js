import React, { useEffect, useState } from "react";
import axios from "axios";
import request from "../../request";
import "./banner.css";
import { CircularProgress } from "@material-ui/core";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, isError] = useState(false);
  const instance = "https://api.themoviedb.org/3";
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getData = async () => {
      isLoading(true);
      await axios
        .get(instance + request.fetchNetflixOriginals)
        .then((res) => {
          const ban = Math.floor(Math.random() * res.data.results.length - 1);
          setBanner(res?.data?.results[ban]);
          //   console.log(res.data.results[ban]);
          isLoading(false);
          isError(false);
        })
        .catch((err) => {
          console.log("error fetching banner data", err);
          isError(true);
        });
    };
    getData();
  }, []);

  const getDesc = (str) => {
    if (str?.length > 150) return str.substring(0, 150) + "...";
    return str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${banner?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {loading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="banner_content">
            {error ? (
              <center>
                {" "}
                <p className="error">
                  {" "}
                  Sorry we could not fetch the image!!{" "}
                </p>{" "}
              </center>
            ) : (
              <>
                <h1 className="banner_title">
                  {banner?.name ||
                    banner?.original_name ||
                    "Right now we dont have the name"}
                </h1>
                <div className="banner_actions">
                  <button className="banner_action_button"> Play </button>
                  <button className="banner_action_button"> My List </button>
                </div>
                <p className="banner_desc">{getDesc(banner?.overview)}</p>
              </>
            )}
          </div>
          <div className="banner_fadded"></div>
        </>
      )}
    </header>
  );
};

export default Banner;

// backdrop_path: "/dYvIUzdh6TUv4IFRq8UBkX7bNNu.jpg"
// first_air_date: "2021-03-24"
// genre_ids: (3) [18, 80, 9648]
// id: 120168
// name: "Who Killed Sara?"
// origin_country: ["MX"]
// original_language: "es"
// original_name: "¿Quién mató a Sara?"
// overview: "Hell-bent on exacting revenge and proving he was framed for his sister's murder, Álex sets out to unearth much more than the crime's real culprit."
// popularity: 1527.659
// poster_path: "/o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg"
// vote_average: 7.8
// vote_count: 638
