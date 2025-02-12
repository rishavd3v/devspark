export default function ProjectContainer(){
    const projects = [
        {
            title: 'Project 1',
            desc: 'This is a project. A longer description is needed for testing.',
            difficulty: 'Medium',
            steps: ['Step 1', 'Step 2', 'Step 3'],
            prerequisites:['tech 1','tech 2'],
            learn:['tech 3','tech 4']
        }
    ]

    return(
        <div>
            {projects.map((project)=>{
                return(
                    <div className="p-4 rounded-lg shadow-md flex flex-col gap-2">
                        <div className="text-lg font-semibold flex gap-2 items-center">
                            {project.title}
                            
                            <div className={`rounded-full bg-zinc-500 text-white text-xs px-2 py-1 w-max ${project.difficulty === 'Easy' ? 'bg-green-600' : project.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-600'}`}>
                                {project.difficulty}
                            </div>
                        </div>

                        <div className="text-sm text-zinc-500">
                            {project.desc}
                        </div>
                        
                        
                        <div className="">
                            {project.steps.map((step, index) => {
                                return (
                                    <div>
                                        {index + 1}. {step}
                                    </div>
                                );
                            })}
                        </div>
                        
                        <div className="flex px-2 py-1 rounded-lg flex-col shadow">
                            <div><i className="bi bi-check2-all"></i> Prerequisite</div>
                            <div className="flex">
                                {project.learn.map((text)=>{
                                    return(
                                        <div>
                                            {text}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        
                        <div  className="flex px-2 py-1 rounded-lg flex-col shadow">
                            <div><i className="bi bi-check2-all"></i> What you'll learn?</div>
                            <div className="flex">
                                {project.learn.map((text)=>{
                                    return(
                                        <div>
                                            {text}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>    
    )
}