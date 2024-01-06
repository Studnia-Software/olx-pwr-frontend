import styles from "./Button.module.scss"
import PropTypes from "prop-types";

function Button({children, image, active, ...props}) {
    return <button className={`${styles.button} ${active ? styles.active : ""}`} {...props}>
        {image ? <img src={image} alt={children}/> : children}
    </button>
}

Button.propTypes = {
    children: PropTypes.string,
    image: PropTypes.string,
    active: PropTypes.bool,
}

export default Button