import styles from "./TextButton.module.scss"
import PropTypes from "prop-types";

function NavButton({children, altColor, ...props}) {
    return <button className={`${styles.button} ${altColor ? styles.altColor : ""}`} {...props}>
        {children}
    </button>
}

NavButton.propTypes = {
    children: PropTypes.string,
    altColor: PropTypes.bool,
}

export default NavButton