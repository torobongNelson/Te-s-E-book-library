import BookModel from '../../Assets/Images/BookModel.jpeg'
import signUp from "../../auth/signUp";
import React from 'react';
import styles from  './index.module.css'




const SignUp = () => {
    return(
        <div>
            <div>
                <img src={BookModel} alt='Sign in here'/>
            </div>
        </div>
    );
}
export default SignUp;