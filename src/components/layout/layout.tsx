import clsx from "clsx";
import styles from "./layout.module.css"
import CategoriesItem from "../categories-item";
import movie from "../../images/movies.jpg";
import film from "../../images/films.png";
import rating from "../../images/rating.jpg";
import playing from "../../images/playing.png";
import Loader from "../loader";


function Layout({isLoading, setIsLoading}) {
    return (
        <div className={clsx(styles.app)}>
            <main>
                <h1 className={clsx(styles.title)}>
                    Категории фильмов
                </h1>
                <div className={clsx(styles.wrapper)} onLoad={() => setIsLoading(false)}>
                    <CategoriesItem  to={"/popular"}
                                    title="Популярные фильмы"
                                    imageSrc={film}
                                    altText="Популярные фильмы"/>
                    <CategoriesItem to="/upcoming"
                                    title="Недавние фильмы"
                                    imageSrc={movie}
                                    altText="Недавние  фильмы"/>
                    {isLoading && <Loader/>}

                    <CategoriesItem to="/rating"
                                    title="Лучшие фильмы"
                                    imageSrc={rating}
                                    altText="Недавно вышедшие фильмы"/>
                    <CategoriesItem to="/playing"
                                    title="Сейчас в кинотеатрах"
                                    imageSrc={playing}
                                    altText="Сейчас в кинотеатрах"/>
                </div>
            </main>
        </div>
    )
}

export default Layout;
