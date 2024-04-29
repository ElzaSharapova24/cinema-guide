import clsx from "clsx";
import styles from "./movies-list.module.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';
import Loader from "../loader";
import BackButton from "../back-button";


function MoviesList({movies}:any) {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (movies !== null && movies.length) {
            setLoading(false);
        }
    }, [movies]);

    return (
        <section className={clsx(styles.container)}>
            <BackButton/>
            <h2 className={clsx(styles.title)}>Список фильмов</h2>
            <div className={clsx(styles.wrapper)}>
                {isLoading ? (
                    <Loader/>
                ) : (
                    Array.isArray(movies) && movies.map((movie, index) => (
                        <Link to={`${movie.id}`} key={index} data-cy="movie">
                            <article className={clsx(styles)}>
                                <img className={clsx(styles.movieImage)}
                                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                                <h3 className={clsx(styles.subtitle)}>{movie.title}</h3>
                                <div className={clsx(styles.inner)}>
                                    <div>
                                        <strong className={clsx(styles.info)}>Рейтинг фильма: </strong>
                                        <span>{movie.vote_average}</span>
                                    </div>
                                    <div>
                                        <strong className={clsx(styles.info)}>Количество проголосовавших: </strong>
                                        <span>{movie.vote_count}</span>
                                    </div>
                                    <div>
                                        <strong className={clsx(styles.info)}>Дата выхода: </strong>
                                        <span>{movie.release_date}</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))
                )}
            </div>
        </section>
    )
}

export default MoviesList;
