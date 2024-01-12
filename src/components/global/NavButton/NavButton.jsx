import styles from "./NavButton.module.scss"
import PropTypes from "prop-types";

function NavButton({children, image, active, ...props}) {
    return <button className={`${styles.button} ${active ? styles.active : ""}`} {...props}>
        {image ? <img src={image} alt={children}/> : children}
    </button>
}

NavButton.propTypes = {
    children: PropTypes.string,
    image: PropTypes.string,
    active: PropTypes.bool,
}

export default NavButton