import React, { useEffect, useState } from "react";
import axios from "axios";
import "./row.css";
import { CircularProgress } from "@material-ui/core";

const Row = ({ title, fetchUrl, isPoster }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const instance = "https://api.themoviedb.org/3";
  const [movie, setMovie] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, isError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      isLoading(true);
      await axios
        .get(instance + fetchUrl)
        .then((res) => {
          console.log(res);
          setMovie(res?.data?.results);
          isLoading(false);
          isError(false);
        })
        .catch((err) => {
          console.log(`fetching movie details error`, err);
          isLoading(false);
          isError(true);
        });
    };
    getData();
  }, [fetchUrl]);

  return (
    <div className="movies">
      <h1 className="title">{title}</h1>
      <div className="movie_posters">
        {loading ? (
          <div className="loader">
            <CircularProgress />
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="loader">
            <p className="error">
              {" "}
              Sorry we had some issue while fetching the data!!{" "}
            </p>
          </div>
        ) : (
          movie?.map((mov) => {
            return (
              <img
                key={mov?.id}
                className={`poster ${isPoster && "large"}`}
                src={`${base_url}${
                  isPoster ? mov?.poster_path : mov?.backdrop_path
                }`}
                alt="movie poster"
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Row;
