import styles from "./SignPage.module.scss"
import SignInPage from "./SignInPage/SignInPage.jsx";
import SignUpPage from "./SignUpPage/SignUpPage.jsx";
import {Navigate, Route, Routes} from "react-router-dom";

function SignPage() {
    return <div className={styles.formContainer}>
        <Routes>
            <Route path="sign-in" element={<SignInPage/>}/>
            <Route path="sign-up" element={<SignUpPage/>}/>
            <Route path="*" element={<Navigate to="sign-in" replace/>}/>
        </Routes>
    </div>
}

export default SignPage;