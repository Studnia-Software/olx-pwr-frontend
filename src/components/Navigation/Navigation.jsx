import styles from "./Navigation.module.scss"
import PropTypes from "prop-types";
import NavButton from "../global/NavButton/NavButton.jsx";
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

function Navigation({handleClickButton, currentContentName}) {
    return <nav className={styles.nav}>
        {menuElements.map(element => {
            return <NavButton key={element.changeContentTo} image={element.icon}
                              active={element.changeContentTo === currentContentName || (!currentContentName && element.changeContentTo === "home")}
                              onClick={() => handleClickButton(element.changeContentTo)}>
                {element.changeContentTo}
            </NavButton>
        })}
    </nav>
}

Navigation.propTypes = {
    handleClickButton: PropTypes.func,
    currentContentName: PropTypes.string
}

export default Navigation