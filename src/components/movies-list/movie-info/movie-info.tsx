import styles from "./movie-info.module.css";
import clsx from "clsx";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {Movie} from "../../../utils/types";


function MovieInfo({movies, path}: Movie) {
    const {id} = useParams();
    const movie = movies.find(movie => movie.id == id);

    return (
        movie && (
            <section className={clsx(styles.container)}>
                <Link to={`/${path}`}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 16 16">
                            <path fill="#868181" fill-opacity="1"
                                  d="M10.862 1.529c.26.26.26.682 0 .942L5.333 8l5.529 5.529a.667.667 0 1 1-.943.942L4.391 8.943a1.333 1.333 0 0 1 0-1.886L9.919 1.53c.26-.26.683-.26.943 0Z"></path>
                        </svg>
                    </button>
                </Link>
                <div className={clsx(styles.wrapper)}>
                    <div className={clsx(styles.inner)}>
                        <h2 className={clsx(styles.title)}>{movie.title}</h2>
                        <p className={clsx(styles.description)}>{movie.overview}</p>
                        <div>
                            <strong>Рейтинг фильма: </strong>
                            <span>{movie.vote_average}</span>
                        </div>
                        <div>
                            <strong>Количество проголосовавших: </strong>
                            <span>{movie.popularity}</span>
                        </div>
                        <div>
                            <strong>Дата выхода: </strong>
                            <span>{movie.release_date}</span>
                        </div>
                        <div>
                            <strong>Язык оригинала: </strong>
                            <span>{movie.original_language}</span>
                        </div>
                    </div>
                    <img className={clsx(styles.image)} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt={movie.title}/>
                </div>
            </section>
        )
    )
}

export default MovieInfo;
