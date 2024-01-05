import styles from "./Navigation.module.scss"
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

const navElements = [
    {
        changeContentTo: "Button1",
        icon: null,
    },
    {
        changeContentTo: "Button2",
        icon: null,
    },
    {
        changeContentTo: "Button3",
        icon: null,
    }
]

function Navigation({onButtonClickHandler}) {
    return <>
        {navElements.map(element => {
            return <button key={element.changeContentTo} onClick={() => {
                onButtonClickHandler(element.changeContentTo)
            }}>{element.changeContentTo}</button>
        })}
    </>
}

Navigation.propTypes = {
    onButtonClickHandler: PropTypes.func,
}

export default CSSModules(Navigation, styles);