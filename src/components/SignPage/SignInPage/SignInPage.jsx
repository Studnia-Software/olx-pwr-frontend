import styles from "./SignInPage.module.scss"
import PropTypes from "prop-types";
import ICONS from "../../../util/icons.jsx";
import TextButton from "../../global/TextButton/TextButton.jsx";

function SignInPage({handleChangeForm}) {
    return <div className={styles.signInPage}>
        <section className="signInSection">
            <h2>sign in</h2>
            <div className="social">
                <img src={ICONS.facebook} alt="facebook"/>
                <img src={ICONS.github} alt="github"/>
                <img src={ICONS.google} alt="google"/>
            </div>
            <input type="text" name="login" id="login"/>
            <input type="password" name="password" id="password"/>
            <TextButton>sign in</TextButton>
        </section>
        <section className={styles.signUpSection}>
            <h1>welcome back.</h1>
            <h3>log in and see what you’ve missed</h3>
            <span>don't have an account?</span>
            <TextButton>sign up</TextButton>
        </section>
    </div>
}

SignInPage.propTypes = {
    handleChangeForm: PropTypes.func,
}

export default SignInPage;