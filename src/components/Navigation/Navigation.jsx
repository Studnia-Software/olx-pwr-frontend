import styles from "./Navigation.module.scss"
import PropTypes from "prop-types";
import Button from "../global/Button/Button.jsx";
import ICONS from "../../util/icons.jsx";

const menuElements = [{
    changeContentTo: "home", icon: ICONS.home,
}, {
    changeContentTo: "search", icon: ICONS.search,
}, {
    changeContentTo: "error", icon: ICONS.error,
}, {
    changeContentTo: "notification", icon: ICONS.notification
}, {
    changeContentTo: "compass", icon: ICONS.compass
}, {
    changeContentTo: "chat", icon: ICONS.chat
}]

function Navigation({handleClickButton, actualContentName}) {
    return <nav className={styles.nav}>
        {menuElements.map(element => {
            return <Button key={element.changeContentTo} image={element.icon}
                           active={element.changeContentTo === actualContentName || (!actualContentName && element.changeContentTo === "home")}
                           onClick={() => handleClickButton(element.changeContentTo)}>
                {element.changeContentTo}
            </Button>
        })}
    </nav>
}

Navigation.propTypes = {
    handleClickButton: PropTypes.func,
    actualContentName: PropTypes.string
}

export default Navigation