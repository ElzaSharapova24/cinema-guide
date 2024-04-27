import styles from "./movie-card.module.css";
import clsx from "clsx";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {Movie} from "../../../utils/types";


function MovieCard({movies}: Movie) {
    const isPopular = true;
    const {id} = useParams();

    const path = isPopular ? 'popular' : 'upcoming';
    const movie = movies.find(movie => movie.id == id);

    return (
        movie ? (
            <section>
                <Link to={`/${path}`}>
                    <button className={clsx(styles.btn)}>Назад</button>
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
                    </div>
                    <img className={clsx(styles.image)} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt={movie.title}/>
                </div>
            </section>
        ) : (
            <>
                <Link to={"/list"}>
                    <h3>Страница не найдена</h3>
                    <button></button>
                 </Link>
            </>
        )
    )
}

export default MovieCard;
