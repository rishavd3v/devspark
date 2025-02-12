import googleSVG from '../assets/google.svg'
import githubSVG from '../assets/github.svg'

export default function LoginForm({handleSignup, handleGoogleSignUp, handleGithubSignUp,error,setError}){
  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(password.length<6){
      setError("Password should be atleast 6 characters long");
      return;
    }
    handleSignup(email,password);
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <div className="p-4 flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-semibold">E-Mail</label>
          <input required type="email" id="email" name="email" placeholder="Enter your E-Mail " className="p-2 rounded-md border w-72" 
          onChange={
            (e)=>{
              setError(null);
            }}
          />
        </div>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-semibold">Password</label>
          <input required type="password" id="password" name="password" placeholder="Password" className="p-2 rounded-md border w-72" 
          onChange={
            (e)=>{
              setError(null);
            }}
          />
        </div>
        
        {error?<div className='font-semibold text-red-500 bg-red-100 p-2 px-4 max-w-72 text-center'>{error}</div>:""}
        
        <div className="w-full">
          <button type='submit' className="bg-blue-600 p-2 px-4 rounded-md text-white w-full">Signup</button>
        </div>
      </div>
      </form>
      
      <div className='flex flex-col gap-4 p-4'>
      <div className="w-full flex items-center gap-2">
        <div className="h-1 w-full bg-zinc-400 rounded-full"></div>
        <div className="">Or</div>
        <div className="h-1 w-full bg-zinc-400 rounded-full"></div>
      </div>

      <div className="w-full">
        <button className=" p-2 px-4 rounded-md text-white w-full border flex justify-center gap-2" onClick={handleGoogleSignUp}>
          <img src={googleSVG} alt="Google Icon" className="inline-block w-6 h-6 mr-2" />
          <div className='text-black font-semibold'>Signup with Google</div>
        </button>
      </div>

      <div className="w-full">
        <button className=" p-2 px-4 rounded-md text-white w-full border flex justify-center gap-2" onClick={handleGithubSignUp}>
          <img src={githubSVG} alt="Google Icon" className="inline-block w-6 h-6 mr-2" />
          <div className='text-black font-semibold'>Signup with GitHub</div>
        </button>
      </div>
      </div>

    </div>
  )
}