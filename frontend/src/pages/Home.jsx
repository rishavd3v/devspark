import { useState } from "react";
import Input from "../components/input";
import { useAuth } from "../utils/Auth";
import Header from "../components/Header";
import ProjectContainer from "../components/ProjectContainer";

export default function Home() {
    const [stack, setStack] = useState('');
    const [difficulty, setDifficulty] = useState('beginner');

    return(
        <div className="bg-white">
            <Header/>
            <div className="md:p-10 md:px-14 p-5 flex flex-col gap-10 w-full">
                <div className=""><Input stack={stack} setStack={setStack} setDifficulty={setDifficulty}/></div>
                <div className="flex flex-col items-center justify-center gap-4 mt-10">
                    <div className="text-zinc-600 text-lg font-semibold">Here are some project ideas for you</div>
                    <div>
                        <ProjectContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}