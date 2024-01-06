// import styles from "./Button.module.scss"
import PropTypes from "prop-types";

function Button({children, ...props}) {
    return <button {...props}>{children}</button>
}

Button.propTypes = {
    children: PropTypes.string,
}

export default Button