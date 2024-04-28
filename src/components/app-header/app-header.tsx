import clsx from "clsx";
import styles from "./app-header.module.css";
import {Link} from "react-router-dom";
import movieIcon from "../../images/movie.svg";

function AppHeader() {

    return (
        <header className={clsx(styles.header)}>
                <Link to={"/"}>
                   <div className={clsx(styles.wrapper)}>
                       <h1 className={clsx(styles.title)}>КиноСправочник</h1>
                       <img className={clsx(styles.icon)} src={movieIcon} alt={'Icon'}/>
                   </div>
                </Link>
        </header>
    )
}

export default AppHeader;
