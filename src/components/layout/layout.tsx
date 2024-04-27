import clsx from "clsx";
import styles from "./layout.module.css"

import {Link} from "react-router-dom";

function Layout () {

    return(
        <div className={clsx(styles.app)}>
            <main>
                <h1 className={clsx(styles.title)}>
                    Список категорий
                </h1>
          <div className={clsx(styles.wrapper)}>
              <article>
                  <Link to={"/popular"}>
                      <h2 className={clsx(styles.subtitle)}>Популярные фильмы</h2>
                      <img className={clsx(styles.image)} src="src/images/top250.png" alt={'a'}/>
                  </Link>
              </article>
              <article>
                  <Link to={"/upcoming"}>
                      <h2 className={clsx(styles.subtitle)}>Недавно вышедшие фильмы</h2>
                      <img className={clsx(styles.image)} src="src/images/top250.png" alt={'a'}/>
                  </Link>
              </article>
          </div>
            </main>
        </div>
    )
}

export default Layout;
