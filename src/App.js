import { useState } from "react";
import Row from "./components/Row";
import "./App.css";
import request from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  // const api_request = "https://api.themoviedb.org/3/movie/550?api_key=b2e9c556714ab609a377a12125a2edfa";
  // const api_access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmU5YzU1NjcxNGFiNjA5YTM3N2ExMjEyNWEyZWRmYSIsInN1YiI6IjYwYTY4YzdhOWE2NGMxMDAyOTY0MjE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ffwpFa-3ObAW9gUZwcZ8VNWx8ZXsqCc1ef4MTYAU4wM";

  // useEffect(() => {}, []);

  return (
    <>
      <div className="app">
        <Nav />
        <Banner />
        <Row
          title="Netflix Originals"
          fetchUrl={request.fetchNetflixOriginals}
          isPoster={true}
        />
        <Row
          title="Trending"
          fetchUrl={request.fetchTrending}
          isPoster={false}
        />
        <Row
          title="Top Rated"
          fetchUrl={request.fetchTopRated}
          isPoster={false}
        />
        <Row
          title="Action Movies"
          fetchUrl={request.fetchActionMovies}
          isPoster={false}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={request.fetchComedyMovies}
          isPoster={false}
        />
        <Row
          title="Horror Movies"
          fetchUrl={request.fetchHorrorMovies}
          isPoster={false}
        />
        <Row
          title="Romantic Movies"
          fetchUrl={request.fetchRomanceMovies}
          isPoster={false}
        />
        <Row
          title="Documentary Movies"
          fetchUrl={request.fetchDocumentaryMovies}
          isPoster={false}
        />
      </div>
    </>
  );
}

export default App;
