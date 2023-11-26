import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <div  className = 'grid border-2 mt-20 ml-[25rem] h-[60vh] w-[80vh]  bg-white pl-20 pt-24'>
        {/* place-content-center mt-24 ml-72 hb-40 w-32 p-32*/}
        <p className='text-accent mb-32 text-xl font-semibold '>Login</p>
        <div className = ' -mt-44'>
            <form> 
                <input type="text" placeholder = "Username" className="input input-bordered w-[30rem] rounded-none"></input>
                <br></br>
                <br></br>
                <input type="text" placeholder="Password" className="input input-bordered w-[30rem] rounded-none" />
                <br></br>
                <br></br>
                <button className="btn btn-accent btn-active btn-large w-72 rounded-none">Login</button>
                <br></br>
            </form>
            
            {/* <Link href ="/marketplaceuser" className='text-accent ml-20'>hello</Link> */}
        </div>
        
    </div>
  )
}

export default Login