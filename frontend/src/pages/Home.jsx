import { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import Header from "../components/Header";
import ProjectContainer from "../components/ProjectContainer";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
    const [stack, setStack] = useState('');
    const [difficulty, setDifficulty] = useState('Beginner');
    const [projects, setProjects] = useState({});
    const [loading,setLoading] = useState(false);
    
    const containerRef = useRef(null);

    useEffect(() => {
        if(projects.data){
            containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[projects]);

    return(
        <div className="bg-white min-h-screen">
            <Header/>
            <div className="md:p-10 md:px-14 p-5 flex flex-col gap-10 w-full">
                <div className=""><Input stack={stack} setStack={setStack} difficulty={difficulty} setDifficulty={setDifficulty} setProjects={setProjects} setLoading={setLoading} loading={loading}/></div>

                {(!loading && projects.data)?
                (<div ref={containerRef} className="flex flex-col items-center justify-center gap-4 mt-10">
                    <div className="text-zinc-600 text-lg font-semibold">Here are some project ideas for you</div>
                    <div>
                        <ProjectContainer projects={projects}/>
                    </div>
                </div>):loading?(<LoadingSpinner/>):null}
            </div>
        </div>
    )
}