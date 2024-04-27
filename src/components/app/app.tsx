import styles from './app.module.css'
import clsx from "clsx";
import AppHeader from "../app-header";
import Layout from "../layout";
import {Route, Routes} from "react-router";
import {useEffect, useState} from "react";
import {getPopularMovies, getUpcomingMovies} from "../../utils/api";
import {Movie} from "../../utils/types";
import ListsMovies from "../lists-movies";
import MovieCard from "../lists-movies/movie-card";



function App() {
    const [popular, setPopular] = useState<Movie>([]);
    const [upcoming, setUpcoming] = useState<Movie>([]);

    useEffect(() => {
        getPopularMovies().then((popular: Movie[]) => setPopular(popular));
    }, [setPopular]);

    useEffect(() => {
       getUpcomingMovies().then((upcoming: Movie[]) => setUpcoming(upcoming));
    }, [setUpcoming]);

    return (
       <>
           <AppHeader/>
           <div className={clsx(styles.container)}>
               <Routes>
                   <Route path={"/"} element={<Layout/>}/>
                   <Route path={"/popular"} element={<ListsMovies movies={popular}/>}/>
                   <Route path={"/upcoming"} element={<ListsMovies movies={upcoming} />}/>
                   <Route path={"/popular/:id"} element={<MovieCard movies={popular}/>}/>
                   <Route path={"/upcoming/:id"} element={<MovieCard movies={upcoming}/>}/>
               </Routes>
           </div>
       </>
    )
}

export default App;
