import styles from './app.module.css'
import clsx from "clsx";
import AppHeader from "../app-header";
import Layout from "../layout";
import {Route, Routes} from "react-router";
import {useEffect, useState} from "react";
import {getNowPlayingMovies, getPopularMovies, getTopMovies, getUpcomingMovies} from "../../utils/api";
import {Movie} from "../../utils/types";
import MovieInfo from "../movies-list/movie-info";
import MoviesList from "../movies-list";
import NotFound from "../not-found";


function App() {
    const [popular, setPopular] = useState<Movie>(null);
    const [upcoming, setUpcoming] = useState<Movie>(null);
    const [rating, setRating] = useState<Movie>(null);
    const [playing, setPlaying] = useState<Movie>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPopularMovies().then((popular: Movie[]) => setPopular(popular));
        getUpcomingMovies().then((upcoming: Movie[]) => setUpcoming(upcoming));
        getTopMovies().then((rating: Movie[]) => setRating(rating));
        getNowPlayingMovies().then((playing: Movie[]) => setPlaying(playing));
    }, []);

    return (
        <>
            <AppHeader/>
            <div className={clsx(styles.container)}>
                <Routes>
                    <Route path={"/"} element={<Layout isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
                    <Route path={"/popular"} element={<MoviesList movies={popular}/>}/>
                    <Route path={"/upcoming"} element={<MoviesList movies={upcoming}/>}/>
                    <Route path={"/rating"} element={<MoviesList movies={rating}/>}/>
                    <Route path={"/playing"} element={<MoviesList movies={playing}/>}/>
                    <Route path={"/popular/:id"} element={<MovieInfo movies={popular}/>}/>
                    <Route path={"/upcoming/:id"} element={<MovieInfo movies={upcoming}/>}/>
                    <Route path={"/rating/:id"} element={<MovieInfo movies={rating}/>}/>
                    <Route path={"/playing/:id"} element={<MovieInfo movies={playing}/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;
