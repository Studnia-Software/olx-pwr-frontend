import './App.scss'
import Navigation from "./components/Navigation/Navigation.jsx";
import SignPage from "./components/SignPage/SignPage.jsx";
import {Navigate, NavLink, Route, Routes, useLocation} from "react-router-dom";
// images
import profilePicture from "/src/assets/profile.png"
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";

let response = {};

function App() {
    let location = useLocation();

    return <>
        {response ? <>
            <NavLink to="/profile" className="profile-picture">
                <img src={profilePicture} alt={"profile picture"}/>
            </NavLink>
            <Navigation actualPage={location.pathname}/>
            <main>
                <Routes>
                    <Route path="/" element={<p>Home</p>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/search" element={<p>Search</p>}/>
                    <Route path="/error" element={<p>Error</p>}/>
                    <Route path="/notification" element={<p>Notification</p>}/>
                    <Route path="/compass" element={<p>Compass</p>}/>
                    <Route path="/chat" element={<p>Chat</p>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </main>
        </> : <Routes>
            <Route path="*" element={<SignPage/>}/>
        </Routes>}
    </>
}

export default App
