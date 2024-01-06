import styles from "./Navigation.module.scss"
import PropTypes from "prop-types";
import Button from "../global/Button/Button.jsx";

const menuElements = [{
    changeContentTo: "con1", icon: null,
}, {
    changeContentTo: "con2", icon: null,
}, {
    changeContentTo: "con3", icon: null,
}]

function Navigation({handleClickButton}) {
    return <nav className={styles.nav}>
        {menuElements.map(element => {
            return <Button key={element.changeContentTo}
                           onClick={() => handleClickButton(element.changeContentTo)}>{element.changeContentTo}</Button>
        })}
    </nav>
}

Navigation.propTypes = {
    handleClickButton: PropTypes.func,
}

export default Navigation