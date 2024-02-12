import styles from "./Navigation.module.scss"
import Button from "../global/Button/Button.jsx";
import {NavLink} from "react-router-dom";
import ICONS from "../../util/icons.jsx";
import PropTypes from "prop-types";

const menuElements = [{
    changeContentTo: "/", icon: ICONS.home,
}, {
    changeContentTo: "/search", icon: ICONS.search,
}, {
    changeContentTo: "/error", icon: ICONS.error,
}, {
    changeContentTo: "/notification", icon: ICONS.notification
}, {
    changeContentTo: "/compass", icon: ICONS.compass
}, {
    changeContentTo: "/chat", icon: ICONS.chat
}]

function Navigation({actualPage}) {
    return <nav className={styles.nav}>
        {menuElements.map(element => {
            return <NavLink key={element.changeContentTo} to={element.changeContentTo}>
                <Button style={"nav"}
                        active={actualPage === element.changeContentTo}>
                    <img src={element.icon} alt={element.changeContentTo}/>
                </Button>
            </NavLink>
        })}
    </nav>
}

Navigation.propTypes = {
    actualPage: PropTypes.string,
}

export default Navigation