import './App.scss'
import Navigation from "./components/Navigation/Navigation.jsx";
import {useState} from "react";
// images
import profilePicture from "/src/assets/profile.png"

// subpages
//

function contentPage(actualContentName, setActualContentName) {
    let content;

    switch (actualContentName) {
        case "home":
            content = "Home";
            break;
        case "search":
            content = "Search";
            break;
        case "error":
            content = "Error";
            break;
        case "notification":
            content = "Notification";
            break;
        case "compass":
            content = "Compass";
            break;
        case "chat":
            content = "Chat";
            break;
        default:
            setActualContentName("home");
            break;
    }

    return content;
}

function App() {
    const [actualContentName, setActualContentName] = useState("");

    return (
        <>
            <div className="profile-picture">
                <img src={profilePicture} alt={"profile picture"}/>
            </div>
            <Navigation actualContentName={actualContentName} handleClickButton={setActualContentName}></Navigation>
            <main>
                {contentPage(actualContentName, setActualContentName)}
            </main>
        </>
    )
}

export default App
