import styles from "./SignUpPage.module.scss"
import PropTypes from "prop-types";
import TextButton from "../../global/TextButton/TextButton.jsx";

function SignUpPage({handleChangeForm}) {
    return <form method="post" className={styles.signInPage}>
        <section>
            <h2>create account</h2>
            <input type="text" name="login" id="login" placeholder="login (5-20 characters)" minLength={5}
                   maxLength={20}
                   aria-label={"login"}
                   autoComplete={"username"}/>
            <input type="email" name="email" id="email" placeholder="email" aria-label={"email"}
                   autoComplete={"email"}/>
            <input type="password" name="password" id="password" placeholder="password (10-25 characters)"
                   minLength={10}
                   maxLength={25}
                   aria-label={"password"}
                   autoComplete={"new-password"}/>
            <input type="password" name="c-password" id="c-password" placeholder="confirm password" minLength={5}
                   maxLength={25}
                   aria-label={"confirm password"} autoComplete={"new-password"}/>
            <TextButton altColor={true} aria-label={"sign up"}>sign up</TextButton>
        </section>
        <section>
            <div>
                <h1>hi</h1>
                <h3>enter some details and<br/>start a journey with us</h3>
            </div>
            <div>
                <h4>already have an account?</h4>
                <TextButton onClick={() => handleChangeForm("sign-in")} aria-label={"sign in page"}>sign in</TextButton>
            </div>
        </section>
    </form>
}

SignUpPage.propTypes = {
    handleChangeForm: PropTypes.func,
}

export default SignUpPage;