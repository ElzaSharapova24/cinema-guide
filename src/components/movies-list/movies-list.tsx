import clsx from "clsx";
import styles from "./movies-list.module.css"
import {Link} from "react-router-dom";


function MoviesList({movies, path}) {
    return (
        <section className={clsx(styles.container)}>
            <Link to={"/"}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 16 16">
                        <path fill="#868181" fill-opacity="1"
                              d="M10.862 1.529c.26.26.26.682 0 .942L5.333 8l5.529 5.529a.667.667 0 1 1-.943.942L4.391 8.943a1.333 1.333 0 0 1 0-1.886L9.919 1.53c.26-.26.683-.26.943 0Z"></path>
                    </svg>
                </button>
            </Link>
            <h2 className={clsx(styles.title)}>Список фильмов</h2>
            <div className={clsx(styles.wrapper)}>
                {
                    Array.isArray(movies) && movies.map((movie, index) => (
                        <Link to={`/${path}/${movie.id}`} key={index}>
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
                }
            </div>
        </section>
    )
}

export default MoviesList;
