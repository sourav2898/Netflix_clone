import Row from "./components/Row";
import "./App.css";
import request from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
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
