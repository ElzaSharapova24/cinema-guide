import clsx from "clsx";
import styles from "./not-found.module.css";
import {Link} from "react-router-dom";

function NotFound({path}) {
    return (
        <section className={clsx(styles.wrapper)}>
            <Link to={`/${path}`}>
                <div className={clsx(styles.inner)}>
                    <h1 className={clsx(styles.title)}>Страница не найдена</h1>
                    <button className={clsx(styles.btn)}>Вернуться назад</button>
                </div>
            </Link>
        </section>
    )
}

export default NotFound;
