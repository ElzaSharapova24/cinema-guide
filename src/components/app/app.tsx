import styles from './app.module.css'
import clsx from "clsx";
import AppHeader from "../app-header";
import Layout from "../layout";
import {Route, Routes} from "react-router";
import ListsMovies from "../categories-movies/lists-movies";
import MovieCard from "../categories-movies/lists-movies/movie-card";
import {useEffect, useState} from "react";
import {getPopularMovies} from "../../utils/api";
import {Movie} from "../../utils/types";



function App() {
    const [movies, setMovies] = useState<Movie>([]);

    useEffect(() => {
        getPopularMovies().then((movies: Movie[]) => setMovies(movies));
    }, [setMovies]);

    return (
        <div className={clsx(styles.container)}>
            <AppHeader/>
            <Routes>
                <Route path={"/"} element={<Layout/>}/>
                <Route path={"/lists"} element={<ListsMovies movies={movies}/>}/>
                <Route path={"/card/:id"} element={<MovieCard movies={movies}/>}/>
            </Routes>
        </div>
    )
}

export default App;
