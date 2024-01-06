import './App.scss'
import Navigation from "./components/Navigation/Navigation.jsx";
import {useState} from "react";
import CONTENT_PAGES from "./util/content-pages.jsx";
// images
import profilePicture from "/src/assets/profile.png"

function App() {
    const [actualContent, setActualContent] = useState("");

    return (
        <>
            <div className="profile-picture">
                <img src={profilePicture} alt={"profile picture"}/>
            </div>
            <Navigation actualContent={actualContent} handleClickButton={setActualContent}></Navigation>
            <main>
                {CONTENT_PAGES[actualContent] || CONTENT_PAGES["home"]}
            </main>
        </>
    )
}

export default App
