import styles from "./movie-card.module.css";
import clsx from "clsx";
import {Link} from "react-router-dom";

function MovieCard () {

    return(
        <section className={clsx(styles.wrapper)}>
            <Link to={"/lists"}>
                <button className={clsx(styles.btn)}>Назад</button>
            </Link>
            <div>
                <h2>Остров Проклятых</h2>
                <span>9.0</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo adipisci omnis alias sunt voluptates explicabo. Similique saepe architecto incidunt libero, accusantium at, ipsa laboriosam impedit reiciendis eveniet quos, iure dolore!</p>
                <p>Длительность 2.18</p>
                <p>Дата выхода:122344</p>
                <p>Жанр</p>
            </div>
            <img className={clsx(styles.image)} src="src/images/island.jpg" alt={'a'}/>
        </section>
    )
}

export default MovieCard;
