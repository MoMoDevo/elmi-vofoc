
"use client"
import { getServerSession } from "next-auth"
import { signIn, useSession } from "next-auth/react"

 
const Login = async() => {
    const session=useSession()
 
  return (
    <div className="flex bg-slate-300 w-4/6 shadow-lg m-auto pt-10 flex-col">
        <pre>
            {session?.email}
        </pre>

        <form action="">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type='submit' onClick={()=>signIn()}>login</button>


        </form>




    </div>
  )
}

export default Login