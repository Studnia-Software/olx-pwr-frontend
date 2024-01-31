import styles from "./SignInPage.module.scss"
import PropTypes from "prop-types";
import ICONS from "../../../util/icons.jsx";
import Button from "../../global/Button/Button.jsx";

function SignInPage({handleChangeForm}) {
    return <form method="post" className={styles.signInPage}>
        <section>
            <h2>sign in</h2>
            <div className={styles.social}>
                <Button style={"shadow"} aria-label={"Facebook"}><img src={ICONS.facebook} alt="facebook"/></Button>
                <Button style={"shadow"} aria-label={"Google"}><img src={ICONS.google} alt="google"/></Button>
                <Button style={"shadow"} aria-label={"Github"}><img src={ICONS.github} alt="github"/></Button>
            </div>
            <input type="text" name="login" id="login" placeholder="login" aria-label="login"
                   autoComplete={"username"}/>
            <input type="password" name="password" id="password" placeholder="password" aria-label="password"
                   autoComplete={"current-password"}/>
            <Button style={"purple"} aria-label={"sign in"}>sign in</Button>
        </section>
        <section>
            <div>
                <h1>welcome<br/>back.</h1>
                <h3>log in and see what<br/>you’ve missed</h3>
            </div>
            <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h4>don't have an account?</h4>
                <Button style={"yellow"} onClick={() => handleChangeForm("sign-up")} aria-label={"sign up page"}>sign up</Button>
            </div>
        </section>
    </form>
}

SignInPage.propTypes = {
    handleChangeForm: PropTypes.func,
}

export default SignInPage;