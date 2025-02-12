import { useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuth } from "../utils/Auth";
import { useFirebase } from "../context/firebase";

export default function Profile(){
    const {user, loading} = useAuth();
    const firebase = useFirebase();
    const navigate = useNavigate();
    
    const handleLogout = ()=>{
        firebase.signoutUser();
        navigate('/login');
    }
    const verifyMailHandler = ()=>{
        firebase.verifyMail();
    }
    
    if(loading){
        return <LoadingSpinner/>
    }
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            
            <div className="flex flex-col items-center justify-around p-10 rounded-md shadow-md w-max  gap-10">
                <div className="flex flex-col items-center">
                    <div><Avatar/></div>
                    <div className="font-semibold text-lg">{user.displayName}</div>
                    <div className="flex gap-1">
                        <div>{user.email}</div>
                        {user.emailVerified?<i className="bi bi-patch-check-fill text-green-500"></i>:<i className="bi bi-patch-exclamation-fill text-red-500"></i>}
                    </div>
                    <div>
                        {!user.emailVerified? <button onClick={verifyMailHandler}>Verify email</button> :""}
                    </div>
                </div>
                <div>
                    <button className="bg-red-600 p-2 px-4 rounded-md text-white" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}