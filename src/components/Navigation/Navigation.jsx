import styles from "./Navigation.module.scss"
import PropTypes from "prop-types";
import ICONS from "../../util/icons.jsx";
import Button from "../global/Button/Button.jsx";

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
            return <Button key={element.changeContentTo}
                           style={"nav"}
                           active={element.changeContentTo === currentContentName || (!currentContentName && element.changeContentTo === "home")}
                           onClick={() => handleClickButton(element.changeContentTo)}>
                <img src={element.icon} alt={element.changeContentTo}/>
            </Button>
        })}
    </nav>
}

Navigation.propTypes = {
    handleClickButton: PropTypes.func,
    currentContentName: PropTypes.string
}

export default Navigation