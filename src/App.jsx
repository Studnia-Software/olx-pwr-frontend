import './App.scss'
import Navigation from "./components/Navigation/Navigation.jsx";
import {useState} from "react";
import {CONTENT_PAGES} from "./util/content-pages.js";

function App() {
    const [actualContent, setActualContent] = useState();

    return (
        <>
            <Navigation handleClickButton={setActualContent}></Navigation>
            <main>
                {CONTENT_PAGES[actualContent] || "None"}
            </main>
        </>
    )
}

export default App
