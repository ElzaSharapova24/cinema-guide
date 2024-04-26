import styles from "./categories-movies.module.css";
import clsx from "clsx";
import {Link} from "react-router-dom";

function CategoriesMovies() {

    return (
        <section className={clsx(styles.wrapper)}>
           <article >
               <Link to={"/lists"}>
                   <img className={clsx(styles.image)} src="src/images/top250.png" alt={'a'}/>
                   <h2>Топ 250 лучших фильмов</h2>
               </Link>
           </article>
            <article>
                <a href={"#"}>
                    <img className={clsx(styles.image)} src="src/images/top250.png" alt={'a'}/>
                    <h2>Топ 250 лучших фильмов</h2>
                </a>
            </article>
            <article>
                <a href={"#"}>
                    <img className={clsx(styles.image)} src="src/images/top250.png" alt={'a'}/>
                    <h2>Топ 250 лучших фильмов</h2>
                </a>
            </article>
            <article>
                <a href={"#"}>
                    <img className={clsx(styles.image)} src="src/images/top250.png" alt={'a'}/>
                    <h2>Топ 250 лучших фильмов</h2>
                </a>
            </article>
        </section>
    )
}

export default CategoriesMovies;
