import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider, sendEmailVerification, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) =>{
    const signupUserWithEmail = async (email,password)=>{
        await createUserWithEmailAndPassword(firebaseAuth,email,password);
        verifyMail();
    };
    const signinWithEmail = (email,password)=>{
        return signInWithEmailAndPassword(firebaseAuth,email,password);
    }
    const signinWithGoogle = ()=>{
        signInWithPopup(firebaseAuth,googleProvider);
    }
    const siginWithGithub = ()=>{
        signInWithPopup(firebaseAuth,githubProvider);
    }
    const signoutUser = ()=>{
        signOut(firebaseAuth);
    }
    const verifyMail = async ()=>{
        const user = firebaseAuth.currentUser;
        if(user.emailVerified){
            try{
                await sendEmailVerification(firebaseAuth.currentUser);
                alert('Verification email sent to '+firebaseAuth.currentUser.email);
            }
            catch(error){
                console.error("Error sending verification email",error);
            }
        }
    }

    return (
        <FirebaseContext.Provider value={{
            signupUserWithEmail, 
            signinWithEmail,
            signinWithGoogle,
            siginWithGithub,
            signoutUser,
            verifyMail,
            }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}