import { useAuth } from "../utils/Auth";
import LoadingSpinner from "./LoadingSpinner";
import profileSvg from '../assets/profile.svg';
export default function Avatar(){
    const {user} = useAuth();
    return(
        <div>
            {user?<img src={user.photoURL?user.photoURL:profileSvg} alt="" className="aspect-square rounded-full bg-white"/>:'User'}            
        </div>
    )
}