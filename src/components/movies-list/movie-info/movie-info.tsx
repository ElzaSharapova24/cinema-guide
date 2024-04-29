import styles from "./movie-info.module.css";
import clsx from "clsx";
import {useParams} from "react-router";
import {Movie} from "../../../utils/types";
import NotFound from "../../not-found";
import Loader from "../../loader";
import BackButton from "../../back-button";


interface MovieInfoProps {
    movies: Movie[] | null;
}
function MovieInfo({movies}:MovieInfoProps) {
    const {id} = useParams();

    if (movies === null)
        return <Loader/>

    const movieIdNumber = Number(id);
    const movie:Movie | undefined = movies.find((movie)  => movie.id == movieIdNumber);

    return (
        movie ? (
            <section className={clsx(styles.container)}>
                <BackButton/>
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
        ) : (
            <NotFound/>
        )
    )
}

export default MovieInfo;
