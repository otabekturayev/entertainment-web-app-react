import "./App.css";
import { Layout } from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { MoviePage } from "./pages/moviesPage/MoviePage";
import { TvSeriesPage } from "./pages/tvSeriesPage/TvSeriesPage";
import { BookMarksPage } from "./pages/bookMarksPage/BookMarksPage";
import { Error404Page } from "./pages/error/Error404Page";
import { Login } from "./pages/auth/Login";
import { useState, useEffect } from "react";
import movieService from "./resource/resourceMovie";

function App() {
  let [movieData, setMovieData] = useState([]);
  let [temp, setTemp] = useState("");
  useEffect(() => {
    movieService
      .getMoviesLIst()
      .then(setMovieData)
      .catch(() => {
        console.log("Error");
      });
  }, []);

  function searchMovies(temp, movies) {
    if (temp) {
      return movies.filter((item) => {
        return item.title.toLowerCase().includes(temp.toLowerCase());
      });
    } else {
      return [];
    }
  }

  function onChangeStr(str) {
    return setTemp(str);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <HomePage
                movieData={movieData}
                searchMovies={searchMovies}
                temp={temp}
                onChangeStr={onChangeStr}
              />
            }
          />
          <Route
            path="/movie"
            element={
              <MoviePage
                movieData={movieData}
                searchMovies={searchMovies}
                temp={temp}
                onChangeStr={onChangeStr}
              />
            }
          />
          <Route
            path="/tvSeries"
            element={
              <TvSeriesPage
                movieData={movieData}
                searchMovies={searchMovies}
                temp={temp}
                onChangeStr={onChangeStr}
              />
            }
          />
          <Route
            path="/bookMarks"
            element={
              <BookMarksPage
                movieData={movieData}
                searchMovies={searchMovies}
                temp={temp}
                onChangeStr={onChangeStr}
              />
            }
          />
        </Route>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </>
  );
}

export default App;
