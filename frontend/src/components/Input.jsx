import Dropdown from "./Dropdown";

export default function Input({stack,setStack, setDifficulty}){

    const handleDifficulty = (e) => {
        setDifficulty(e.target.value);
    }
    
    return(
        <div className="flex flex-col p-6 rounded-lg shadow-md gap-4 justify-center">
            <div>
                <div className="text-2xl font-semibold">Select Your Preferences</div>
                <div className="font-medium text-zinc-500">Choose your tech stack and project difficulty</div>
            </div>

            <div>
                <Dropdown setStack={setStack} stack={stack}/>
            </div>
            
            <div className="flex flex-col font-medium">
                <div className="text-lg font-semibold">Difficulty</div>
                <div>
                    <input type="radio" defaultChecked name="dif" id="beginner" value="beginner" onClick={handleDifficulty}/> 
                    <label htmlFor="beginner"> Beginner</label>
                </div>
                <div>
                    <input type="radio" name="dif" id="intermediate" value="intermediate" onClick={handleDifficulty}/> 
                    <label htmlFor="intermediate"> Intermediate</label>
                </div>
                <div>
                    <input type="radio" name="dif" id="advanced" value="advanced" onClick={handleDifficulty}/> 
                    <label htmlFor="advanced"> Advanced</label>
                </div>
            </div>
            <div className="flex justify-center font-semibold">
                <button className="bg-black p-2 rounded-md text-white">Get Projects</button>
            </div>

        </div>
    )
}