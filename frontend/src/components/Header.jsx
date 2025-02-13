import { useNavigate } from "react-router-dom"
import Avatar from "./Avatar";

export default function Header(){
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/home');
    }
    return(
        <div className="flex justify-between items-center bg-black text-white p-4">
            <div className="font-bold">DEVSPARK</div>
            <div className="flex items-center gap-4">
                <button onClick={handleClick}>Home</button>
                <button onClick={()=>navigate('/profile')} className="w-10"><Avatar/></button>
                
            </div>
        </div>
    )
}