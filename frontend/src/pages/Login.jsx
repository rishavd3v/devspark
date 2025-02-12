import { useState } from "react";
import LoginForm from "../components/LoginForm";
import {useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const firebase = useFirebase();
    const [error, setError] = useState('');

    const handleSignin = async (email,password) => {
        try {
            await firebase.signinWithEmail(email, password);
            navigate('/home');
        } 
        catch (error) {
          console.error("Error signing up with email and password", error   );
          setError(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            await firebase.signinWithGoogle();
        } 
        catch (error) {
          console.error("Error signing up with Google", error);
          
        }
    };
    const handleGithubSignUp = async () => {
        try {
            await firebase.siginWithGithub();
        } 
        catch (error) {
          console.error("Error signing up with Github", error);
        }
    };
    
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-2">
            <div className="text-xl font-semibold">Sign-in to your account</div>
            <LoginForm handleSignup={handleSignin}handleGoogleSignUp={handleGoogleSignUp} handleGithubSignUp={handleGithubSignUp} error={error} setError={setError}/>
        </div>
    )
}