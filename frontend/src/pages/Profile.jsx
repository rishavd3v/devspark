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
    }
    const verifyMailHandler = ()=>{
        firebase.verifyMail();
    }
    
    if(loading){
        return <div className="h-screen"><LoadingSpinner/></div>
    }
    return(
        <div className="md:p-10 md:px-14 p-5 h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center md:items-start gap-6 p-4 border  shadow w-1/2 min-w-max">
            <div className="flex flex-col md:flex-row items-center gap-4 w-max">
                <div className="w-24">{<Avatar/>}</div>
                <div className="flex flex-col items-center md:items-start">
                    <div className="font-bold text-2xl">{user.displayName?user.displayName:"Silly Cat"}</div>
                    <div className="flex items-center gap-2">
                        <div className="text-zinc-500">{user.email}</div>

                        <div className="relative group">
                            {user.emailVerified ? <div className="text-green-500"><i className="bi bi-patch-check-fill"></i></div> : <div className="text-red-500"><i class="bi bi-patch-exclamation-fill"></i></div>}
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {user.emailVerified ? "Email verified" : "Email not verified"}
    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-max">
                <button className="bg-black rounded-md text-white p-2 w-full">Edit Profile</button>
                <button className="border shadow rounded-md  p-2 w-full" onClick={handleLogout}>Sign Out</button>
            </div>
        </div>
        </div>
    )
}