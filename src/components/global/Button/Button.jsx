import styles from "./Button.module.scss"
import PropTypes from "prop-types";

function Button({children, style, active, ...props}) {
    const styleClass = function () {
        switch (style) {
            case "shadow":
                return styles.shadowButton;
            case "nav":
                return styles.navButton;
            case "purple":
                return styles.purpleButton;
            case "yellow":
                return styles.yellowButton;
        }
    }();

    return <button className={`${styles.button} ${styleClass} ${active ? styles.active : ""}`} {...props}>
        {children}
    </button>
}

Button.propTypes = {
    children: PropTypes.element || PropTypes.string,
    style: PropTypes.string,
    active: PropTypes.bool,
}

export default Button