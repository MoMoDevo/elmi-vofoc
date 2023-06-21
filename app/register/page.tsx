
import {prisma} from "../../libs/prismaDb"
import {hash} from "bcrypt"
const Register = () => {


async function registerUIser(data:FormData) {
    "use server"
    const password=await hash(data.get("password") as string,10)
   const user=await prisma.user.create({
    data:{
        name:data.get("name") as string,
        email:data.get("email") as string,
        password
    }
   })
}


  return (
   
    <form action={registerUIser} className="flex w-4/6 shadow-lg m-auto pt-10 bg-slate-100 flex-col gap-4 ">
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password"/>
       
        
        <button type="submit">register</button>



    </form>


 
  )
}

export default Register