import './App.scss'
import {useState} from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import SignPage from "./components/SignPage/SignPage.jsx";
// images
import profilePicture from "/src/assets/profile.png"
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";

let response = {};

function contentPage(currentContentName, setCurrentContentName) {
    let content;

    switch (currentContentName) {
        case "profile":
            content = <ProfilePage/>;
            break;
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
            setCurrentContentName("home");
            break;
    }

    return content;
}

function App() {
    const [currentContentName, setCurrentContentName] = useState("Home");

    return <>
        {response ? <>
            <div className="profile-picture" onClick={() => setCurrentContentName("profile")}>
                <img src={profilePicture} alt={"profile picture"}/>
            </div>
            <Navigation currentContentName={currentContentName} handleClickButton={setCurrentContentName}></Navigation>
            <main>
                {contentPage(currentContentName, setCurrentContentName)}
            </main>
        </> : <SignPage/>}
    </>
}

export default App
