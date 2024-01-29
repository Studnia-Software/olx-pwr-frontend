import styles from "./SignUpPage.module.scss"
import PropTypes from "prop-types";
import Button from "../../global/Button/Button.jsx";

function SignUpPage({handleChangeForm}) {
    return <form method="post" className={styles.signInPage}>
        <section>
            <h2>create account</h2>
            <input type="text" name="login" id="login" placeholder="login"/>
            <input type="email" name="email" id="email" placeholder="email"/>
            <input type="password" name="password" id="password" placeholder="password"/>
            <input type="password" name="c-password" id="c-password" placeholder="confirm password"/>
            <Button style={"yellow"}>sign in</Button>
        </section>
        <section>
            <div>
                <h1>hi</h1>
                <h3>enter some details and<br/>start a journey with us</h3>
            </div>
            <div>
                <h4>already have an account?</h4>
                <Button style={"purple"} onClick={() => handleChangeForm("sign-in")}>sign in</Button>
            </div>
        </section>
    </form>
}

SignUpPage.propTypes = {
    handleChangeForm: PropTypes.func,
}

export default SignUpPage;