import clsx from "clsx";
import styles from "./layout.module.css"
import CategoriesMovies from "../categories-movies";

function Layout () {

    return(
        <div className={clsx(styles.app)}>
            <main>
                <h1 className={clsx(styles.title)}>
                    Список категорий
                </h1>
                <CategoriesMovies/>
            </main>
        </div>
    )
}

export default Layout;
