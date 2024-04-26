import styles from './app.module.css'
import clsx from "clsx";
import AppHeader from "../app-header";
import Layout from "../layout";
import {Route, Routes} from "react-router";
import ListsMovies from "../categories-movies/lists-movies";
import MovieCard from "../categories-movies/lists-movies/movie-card";

function App() {

  return (
      <div className={clsx(styles.container)}>
          <AppHeader/>
          <Routes>
              <Route path={"/"} element={<Layout/>}/>
              <Route path={"/lists"} element={<ListsMovies/>}/>
              <Route path={"/card"} element={<MovieCard/>}/>
          </Routes>
      </div>
  )
}

export default App;
