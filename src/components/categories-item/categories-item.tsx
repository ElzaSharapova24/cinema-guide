import {Link} from "react-router-dom";
import clsx from "clsx";
import styles from "./categories-item.module.css"


function CategoriesItem ({ to, title, imageSrc, altText }) {
    return (
        <article>
            <Link to={to}>
                <h2 className={clsx(styles.subtitle)}>{title}</h2>
                <img className={clsx(styles.image)} src={imageSrc} alt={altText}/>
            </Link>
        </article>
    );
}
export default CategoriesItem;
