import styles from "./SignInPage.module.scss"
import PropTypes from "prop-types";
import ICONS from "../../../util/icons.jsx";
import TextButton from "../../global/TextButton/TextButton.jsx";

function SignInPage({handleChangeForm}) {
    return <form method="post" className={styles.signInPage}>
        <section>
            <h2>sign in</h2>
            <div className={styles.social}>
                <img src={ICONS.facebook} alt="facebook"/>
                <img src={ICONS.google} alt="google"/>
                <img src={ICONS.github} alt="github"/>
            </div>
            <input type="text" name="login" id="login" placeholder="login"/>
            <input type="password" name="password" id="password" placeholder="password"/>
            <TextButton>sign in</TextButton>
        </section>
        <section>
            <div>
                <h1>welcome<br/>back.</h1>
                <h3>log in and see what<br/>you’ve missed</h3>
            </div>
            <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h4>don't have an account?</h4>
                <TextButton altColor={true} onClick={() => handleChangeForm("sign-up")}>sign up</TextButton>
            </div>
        </section>
    </form>
}

SignInPage.propTypes = {
    handleChangeForm: PropTypes.func,
}

export default SignInPage;