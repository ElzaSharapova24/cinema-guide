import clsx from "clsx";
import styles from "./app-header.module.css";


function AppHeader () {

    return (
        <header className={clsx(styles.header)}>
            <strong className={clsx(styles.title)}>
                <a href={"#"}>КиноСправочник</a>
            </strong>
        </header>
    )
}

export default AppHeader;
