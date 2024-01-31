import styles from "./SignInPage.module.scss"
import PropTypes from "prop-types";
import ICONS from "../../../util/icons.jsx";
import TextButton from "../../global/TextButton/TextButton.jsx";

function SignInPage({handleChangeForm}) {
    return <form method="post" className={styles.signInPage}>
        <section>
            <h2>sign in</h2>
            <div className={styles.social}>
                <img src={ICONS.facebook} alt="facebook" aria-label={"Facebook"}/>
                <img src={ICONS.google} alt="google" aria-label={"Google"}/>
                <img src={ICONS.github} alt="github" aria-label={"Github"}/>
            </div>
            <input type="text" name="login" id="login" placeholder="login" aria-label="login"
                   autoComplete={"username"}/>
            <input type="password" name="password" id="password" placeholder="password" aria-label="password"
                   autoComplete={"current-password"}/>
            <TextButton aria-label={"sign in"}>sign in</TextButton>
        </section>
        <section>
            <div>
                <h1>welcome<br/>back.</h1>
                <h3>log in and see what<br/>you’ve missed</h3>
            </div>
            <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h4>don't have an account?</h4>
                <TextButton altColor={true}
                            onClick={() => handleChangeForm("sign-up")} aria-label={"sign up page"}>sign up</TextButton>
            </div>
        </section>
    </form>
}

SignInPage.propTypes = {
    handleChangeForm: PropTypes.func,
}

export default SignInPage;