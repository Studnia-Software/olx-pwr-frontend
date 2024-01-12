import styles from "./SignPage.module.scss"
import {useState} from "react";
import SignInPage from "./SignInPage/SignInPage.jsx";
import SignUpPage from "./SignUpPage/SignUpPage.jsx";

function SignPage() {
    const [currentForm, setCurrentForm] = useState("sign-in")

    return <>
        <div className={styles.formContainer}>
            {currentForm === "sign-in" ? <SignInPage handleChangeForm={setCurrentForm}/> :
                <SignUpPage handleChangeForm={setCurrentForm}/>}
        </div>
    </>
}

export default SignPage;