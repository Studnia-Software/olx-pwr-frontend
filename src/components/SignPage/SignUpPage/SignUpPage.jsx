import styles from "./SignUpPage.module.scss"
import Button from "../../global/Button/Button.jsx";
import {Link} from "react-router-dom";

function SignUpPage() {
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
            <Button style={"yellow"} aria-label={"sign up"}>sign up</Button>
        </section>
        <section>
            <div>
                <h1>hi</h1>
                <h3>enter some details and<br/>start a journey with us</h3>
            </div>
            <div>
                <h4>already have an account?</h4>
                <Link to="/sign-in"><Button style={"purple"} aria-label={"sign in page"}>sign in</Button></Link>
            </div>
        </section>
    </form>
}

export default SignUpPage;