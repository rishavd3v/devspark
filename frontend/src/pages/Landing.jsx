import { useNavigate } from "react-router-dom"

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="bg-zinc-950 text-white">
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center h-full px-4 lg:p-0 lg lg:w-1/2 text-center gap-4">
                    <div className="text-6xl font-extrabold">Fuel Your Creativity with <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-7xl">DevSpark</span></div>
                    <div className="text-lg font-medium text-zinc-400">Unlock AI-powered project ideas tailored to your tech stack. Spark creativity and build your next big project effortlessly.</div>
                    <div className="mt-10">
                        <button className="flex gap-3 items-center py-2 px-6 text-white font-light rounded bg-gradient-to-r from-pink-500 to-purple-400" onClick={()=>navigate('/home')}>
                            Get Started
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center h-full px-4 lg:p-0 lg:w-1/2 text-center gap-4">
                    <div className="sm:text-6xl text-5xl font-extrabold">Build Beyond <span className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Imagination</span></div>
                    <div className="text-lg font-medium text-zinc-400">Discover unique project ideas tailored to your tech stack and bring your creativity to life with DevSpark.</div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-10 justify-center">
                        <div className="md:p-6 p-4 border border-zinc-600 shadow shadow-zinc-700 rounded-md flex flex-col gap-2 items-center">
                            <div className="flex lg:gap-4 gap-1 items-center">
                                <i className="bi bi-lightning-fill font-bold text-xl bg-blue-500 px-2 aspect-square rounded-md flex items-center"></i>
                                <div className="md:text-lg font-bold">AI-Driven Project Ideas</div>
                            </div>
                            <div>
                                <div className="text-zinc-400 font-light">Get unique and innovative project ideas tailored to your chosen tech stack with the power of AI.
                                </div>
                            </div>
                        </div>
                        
                        <div className="md:p-6 p-4 border border-zinc-600 shadow shadow-zinc-700 rounded-md flex flex-col gap-2 items-center">
                            <div className="flex lg:gap-4 gap-1 items-center">
                                <i className="bi bi-boxes font-bold text-xl bg-blue-500 px-2 aspect-square rounded-md flex items-center"></i>
                                <div className="text-lg font-bold">Tech Stack Customization</div>
                            </div>
                            <div>
                                <div className="text-zinc-400 font-light">Select your preferred technologies, and let DevSpark generate ideas that fit your skill set.</div>
                            </div>
                        </div>
                        
                        <div className="md:p-6 p-4 border border-zinc-600 shadow shadow-zinc-700 rounded-md flex flex-col gap-2 items-center">
                            <div className="flex lg:gap-4 gap-1 items-center">
                                <i className="bi bi-rocket-takeoff-fill font-bold text-xl bg-blue-500 px-2 aspect-square rounded-md flex items-center"></i>
                                <div className="text-lg font-bold">Endless Innovation</div>
                            </div>
                            <div>
                                <div className="text-zinc-400 font-light">Explore a wide range of project concepts, from beginner-friendly builds to advanced AI solutions.</div>
                            </div>
                        </div>
                        
                        <div className="md:p-6 p-4 border border-zinc-600 shadow shadow-zinc-700 rounded-md flex flex-col gap-2 items-center">
                            <div className="flex lg:gap-4 gap-1 items-center">
                                <i className="bi bi-fire font-bold text-xl bg-blue-500 px-2 aspect-square rounded-md flex items-center"></i>
                                <div className="text-lg font-bold">Boost Your Portfolio</div>
                            </div>
                            <div>
                                <div className="text-zinc-400 font-light">Work on meaningful projects that enhance your skills and make your portfolio stand out</div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>

            <div className="flex justify-between items-center border-t border-zinc-600 lg:p-10 lg:px-40 gap-4 p-4 px-10 mt-20">
                <div className="flex flex-col gap-1">
                    <div className="text-2xl font-semibold">Devspark</div>
                    <div className="text-sm font-bold text-zinc-400">Developed by Rishav.</div>
                </div>
                <div className="flex gap-4 text-xl">
                    <button onClick={()=>window.open('https://github.com/rishavd3v', '_blank')}><i className="bi bi-github"></i></button>
                    <button onClick={()=>window.open('https://linkedin.com/in/rishav01', '_blank')}><i className="bi bi-linkedin"></i></button>
                </div>
            </div>
        </div>
    )
}