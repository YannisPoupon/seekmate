import React from 'react';
import firebase from "firebase/app";
import {auth} from "../../firebase";

const Login = () =>{
    return (
        <div>
            <div>
                <h2>SeekMate</h2>
                <div onClick={() =>
                        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
                    }
                >
                    Sign in With Google
                </div>
            </div>
        </div>
    );
};

export default Login;