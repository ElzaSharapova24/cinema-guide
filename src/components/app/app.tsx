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


function App() {
    const [popular, setPopular] = useState<Movie>([]);
    const [upcoming, setUpcoming] = useState<Movie>([]);
    const [rating, setRating] = useState<Movie>([]);
    const [playing, setPlaying] = useState<Movie>([]);
    const [isLoading, setIsLoading] = useState(true);

    const popularPath = 'popular';
    const upcomingPath = 'upcoming';
    const ratingPath = 'rating';
    const playingPath = 'playing';

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
                    <Route path={"/popular"} element={<MoviesList movies={popular} path={popularPath} isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
                    <Route path={"/upcoming"} element={<MoviesList movies={upcoming} path={upcomingPath} isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
                    <Route path={"/rating"} element={<MoviesList movies={rating} path={ratingPath} isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
                    <Route path={"/playing"} element={<MoviesList movies={playing} path={playingPath}/>}/>
                    <Route path={"/popular/:id"} element={<MovieInfo movies={popular} path={popularPath}/>}/>
                    <Route path={"/upcoming/:id"} element={<MovieInfo movies={upcoming} path={upcomingPath}/>}/>
                    <Route path={"/rating/:id"} element={<MovieInfo movies={rating} path={ratingPath}/>}/>
                    <Route path={"/playing/:id"} element={<MovieInfo movies={playing} path={playingPath}/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;
