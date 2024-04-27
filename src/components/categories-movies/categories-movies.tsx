import styles from "./categories-movies.module.css";
import clsx from "clsx";
import {Link} from "react-router-dom";



function CategoriesMovies() {

    return (
        <section className={clsx(styles.wrapper)}>
           <article>
               <Link to={"/lists"}>
                   <img className={clsx(styles.image)} src="src/images/top250.png" alt={'a'}/>
                   <h2>Недавно вышедшие фильмы</h2>
               </Link>
           </article>
        </section>
    )
}

export default CategoriesMovies;
