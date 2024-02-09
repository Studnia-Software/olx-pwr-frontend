import './App.scss'
import Navigation from "./components/Navigation/Navigation.jsx";
import SignPage from "./components/SignPage/SignPage.jsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
// images
import profilePicture from "/src/assets/profile.png"
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import {useState} from "react";

let response = {};

function App() {
    // TODO: check for better onRoute methods
    const [actualPage, setActualPage] = useState("/")

    return <>
        {response ? <>
            <NavLink to="/profile" className="profile-picture" onClick={() => {
                setActualPage("/profile")
            }}>
                <img src={profilePicture} alt={"profile picture"}/>
            </NavLink>
            <Navigation actualPage={actualPage} handleSetActualPage={setActualPage}/>
            <main>
                <Routes>
                    <Route path="/" element={<p>Home</p>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </main>
        </> : <Routes>
            <Route path="*" element={<SignPage/>}/>
        </Routes>}
    </>
}

export default App
