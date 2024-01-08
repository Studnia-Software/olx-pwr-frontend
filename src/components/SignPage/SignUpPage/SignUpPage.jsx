import styles from "./SignUpPage.module.scss"
import PropTypes from "prop-types";
import TextButton from "../../global/TextButton/TextButton.jsx";

function SignUpPage({handleChangeForm}) {
    return <div className={styles.signInPage}>
        <section className="signUpSection">
            <h2>create account</h2>
            <input type="text" name="login" id="login" placeholder="login"/>
            <input type="email" name="email" id="email" placeholder="email"/>
            <input type="password" name="password" id="password" placeholder="password"/>
            <input type="password" name="c-password" id="c-password" placeholder="confirm password"/>
            <TextButton>sign in</TextButton>
        </section>
        <section className="signInSection">
            <h1>hi</h1>
            <h3>enter some details and start a journey with us</h3>
            <span>already have an account?</span>
            <TextButton onClick={() => handleChangeForm("sign-in")}>sign in</TextButton>
        </section>
    </div>
}

SignUpPage.propTypes = {
    handleChangeForm: PropTypes.func,
}

export default SignUpPage;