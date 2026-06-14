import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
function SignUp() {
const [user,setUser]= useState(null)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const Signup= async()=>{
  const {data,error}= await supabase.auth.signUp({
    email,
    password
  })
  if(error) alert (error.message)
    else alert('check your email')
}
const login=async()=>{
  const {error}=await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) alert(error.message)

    // session/token
    // signup ==--> token created by temprary time
    // oppose of this method
    // we create a button of logout
    // then session expiry on click(button)


}

const googleLogin=async()=>{
  const {error}=await supabase.auth.signInWithOAuth({
    provider:"google"
  })
  if(error)alert(error.message)
}
const logout=async ()=>{
  await supabase.auth.signOut();
}
// const googleLogin=async()=>({
  
// })

useEffect(()=>{
  const getUser=async()=>{
    const {data:{user}}=await supabase.auth.getUser()
    setUser(user)
  }
  getUser()
  supabase.auth.onAuthStateChange((_event,session)=>{
    setUser(session?.user || null)
  })
},[])


  return (
    <>
<div className="min-h-screen flex bg-linear-to-br from-gray-900 via-indigo-950 to-black">
<div className="hidden lg:flex w-1/2 items-center justify-center relative">

 <div className="absolute w-72 h-72 bg-indigo-500 blur-3xl opacity-30 rounded-full"></div>
 <img
      src="https://thumbs.dreamstime.com/b/programming-coding-programmer-writes-new-program-flat-illustration-184363318.jpg"
      className="w-3/4 rounded-2xl shadow-2xl z-10 hover:scale-105 transition"
    />
  </div>  

  
   <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-900 px-6 py-12">
        <div className="w-full max-w-sm">

          <h2 className="text-center text-2xl font-bold text-white mb-8">
            Sign in to your account
          </h2>
 
{/* <div className="w-full lg:w-1/2 items-center justify-center bg-gray-900 px-6 py-12">
  <div className="w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold text-white mb-8 ml-30">
              Sign in to your account
            </h2>
       */}
      {!user?(<>
    <label className="block text-sm font-medium text-gray-100">
                Email address
              </label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} className="mb-3 w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500" name="email" id="email" />
    
   <label className="block text-sm font-medium text-gray-100">
                Password
              </label>
        <input type="password"    className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
               onChange={(e)=>setPassword(e.target.value)} name="name" id="name" />
       
<br /><br />
        <button 
              className="w-full rounded-md bg-indigo-500 py-2 font-semibold text-white hover:bg-indigo-400" onClick={Signup}>Signup</button>
     
        <br /> <br />
        <button  className="w-full rounded-md bg-indigo-500 py-2 font-semibold text-white hover:bg-indigo-400" onClick={login}>Login</button>
        <br /><br />
        <button  className="w-full rounded-md bg-red-500 py-2 font-semibold text-white hover:bg-indigo-400" onClick={googleLogin} > Sign In With Google</button>
        <br /><br />
      </>):(<>
      <h1 className="text-white mb-4">Welcome {user.email}</h1>
              <button onClick={logout} className="w-full bg-red-500 py-2 rounded-md text-white">
                Logout
              </button>
      </>)}
      </div>
      </div>
      </div>
  </>
    
      )
      
      

}

export default SignUp;
