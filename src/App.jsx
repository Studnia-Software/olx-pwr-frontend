import './App.scss'
import Navigation from "./components/Navigation/Navigation.jsx";
import {useState} from "react";

function App() {
    const [actualContent, setActualContent] = useState();

    return (
        <>
            <Navigation onButtonClickHandler={setActualContent}></Navigation>
            <main>
                {actualContent ? actualContent : "None"}
            </main>
        </>
    )
}

export default App
