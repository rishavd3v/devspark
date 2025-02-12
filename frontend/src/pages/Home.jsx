import { useState } from "react";
import Input from "../components/input";
import { useAuth } from "../utils/Auth";
import Header from "../components/Header";

export default function Home() {
    const [stack, setStack] = useState('');
    const [difficulty, setDifficulty] = useState('beginner');
    const {user} = useAuth();

    return(
        <div>
            <Header/>
            <div className="p-10 px-14"><Input stack={stack} setStack={setStack} setDifficulty={setDifficulty}/></div>
        </div>
    )
}