import clsx from "clsx";
import styles from "./lists-movies.module.css";
import {Link} from "react-router-dom";


function ListsMovies() {

    return (
        <section>
            <Link to={"/"}>
                <button className={clsx(styles.btn)}>Назад</button>
            </Link>
            <div className={clsx(styles.wrapper)}>
                <h2>250 лучших фильмов</h2>
                <img className={clsx(styles.image)} src="src/images/top250.png" alt={'a'}/>
            </div>
            <div className={clsx(styles.inner)}>
                <Link to={"/card"}>
                    <article>
                        <img className={clsx(styles.movieImage)} src="src/images/island.jpg" alt={'a'}/>
                        <h3>Остров проклятых</h3>
                        <span>9.0</span>
                        <span>19 февраля 2010 года</span>
                        <p>2 ч 18 мин</p>
                    </article>
                </Link>
                <article>
                    <img className={clsx(styles.movieImage)} src="src/images/island.jpg" alt={'a'}/>
                    <h3>Остров проклятых</h3>
                    <span>9.0</span>
                    <span>19 февраля 2010 года</span>
                    <p>2 ч 18 мин</p>
                </article>
                <article>
                    <img className={clsx(styles.movieImage)} src="src/images/island.jpg" alt={'a'}/>
                    <h3>Остров проклятых</h3>
                    <span>9.0</span>
                    <span>19 февраля 2010 года</span>
                    <p>2 ч 18 мин</p>
                </article>
                <article>
                    <img className={clsx(styles.movieImage)} src="src/images/island.jpg" alt={'a'}/>
                    <h3>Остров проклятых</h3>
                    <span>9.0</span>
                    <span>19 февраля 2010 года</span>
                    <p>2 ч 18 мин</p>
                </article>
                <article>
                    <img className={clsx(styles.movieImage)} src="src/images/island.jpg" alt={'a'}/>
                    <h3>Остров проклятых</h3>
                    <span>9.0</span>
                    <span>19 февраля 2010 года</span>
                    <p>2 ч 18 мин</p>
                </article>
                <article>
                    <img className={clsx(styles.movieImage)} src="src/images/island.jpg" alt={'a'}/>
                    <h3>Остров проклятых</h3>
                    <span>9.0</span>
                    <span>19 февраля 2010 года</span>
                    <p>2 ч 18 мин</p>
                </article>
            </div>
        </section>
    )
}

export default ListsMovies;
