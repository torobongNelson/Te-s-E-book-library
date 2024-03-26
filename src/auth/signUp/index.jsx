import BookModel from "../../Assets/Images/BookModel.jpeg"
import styles from "./index.module.css"

const SignUp = () => {
    return (
        <div className={styles.mainBody}>
            <div>
                <img src={BookModel} alt={'Become a member'}/>
            </div>

            <div className={styles.formBody}>
                            <h1>Welcome to your E-library</h1>
                <p>Let's know you.</p>
                <p>Provide the following details</p>


            <div className={styles.userform}>
            <form>
                <input type="text" placeholder="FirstName"/>
                <input type="text" placeholder="LastName"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>sign up</button>
            </form>

                <div className={styles.accRecreate} >
                    <p>Already have an account?</p>
                    <a href="/login">Login</a>
                </div>

            </div>
            </div>
        </div>
    );
}

export default SignUp;


