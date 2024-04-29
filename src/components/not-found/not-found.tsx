import clsx from "clsx";
import styles from "./not-found.module.css";
import {useNavigate} from "react-router";

function NotFound() {
    const navigate = useNavigate();

    return (
        <section className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <h1 className={clsx(styles.title)}>Страница не найдена</h1>
                <button className={clsx(styles.btn)}
                        onClick={() => {
                            navigate(-1)
                        }}>
                    Вернуться назад
                </button>
            </div>
        </section>
    )
}

export default NotFound;
