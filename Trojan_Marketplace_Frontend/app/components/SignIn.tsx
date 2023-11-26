"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

async function Signup(fname: String, lname: String, email: String, username: String, password: String) {
  const res = await fetch('http://localhost:8000/auth/signup', {
    method: 'POST',  
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({fname, lname, email, username, password}),
  })
 
  if (res.status === 201) {
    // successful sign up
    return true
  } else {
    // unsuccessful sign up
    return false
  }
}

const SignIn = () => {
  const router = useRouter();

  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const [callapi, setcallapi] = useState(false)

  const [redirect, setredirect] = useState(false)

  useEffect(() => {
    if(callapi){
      const api = async () => {
        const response = await Signup(fname, lname, email, username, password);
        if (response) {
          console.log('successful sign up');
          setredirect(true);
        } else {
          console.log('unsuccessful sign up');
          alert('Unsuccessful sign up. Please Try Again');
        }
      };
      api();
      setcallapi(false);
    } else {
      console.log("will not call api")
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [callapi]);

  if(redirect){
    router.push('/login')
  }

  return (
    <div  className = 'grid border-2 mt-20 ml-[25rem] h-[60vh] w-[80vh]  bg-white pl-20 pt-24'>
        {/* place-content-center mt-24 ml-72 hb-40 w-32 p-32*/}
        <p className='text-accent mb-32 -mt-12 text-xl font-semibold '>Sign up for a free account</p>
        <div className = ' -mt-32'>
                <input type="text" placeholder="First name" value={fname} onChange={e => setfname(e.target.value)} className="input input-bordered w-52 rounded-none" />
                <input type="text" placeholder="Last name" value={lname} onChange={e => setlname(e.target.value)} className="input input-bordered w-52 rounded-none" />
                <br></br>
                <br></br>
                <input type = "email" placeholder = "Email" value={email} onChange={e => setemail(e.target.value)} className="input input-bordered w-[30rem] rounded-none"></input>
                <br></br>
                <br></br>
                <input type="text" placeholder = "Username" value={username} onChange={e => setusername(e.target.value)} className="input input-bordered w-[30rem] rounded-none"></input>
                <br></br>
                <br></br>
                <input type="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} className="input input-bordered w-[30rem] rounded-none" />
                <br></br>
                <br></br>
                <button onClick={() => setcallapi(true)} className="btn btn-accent btn-active btn-large w-72 rounded-none">Register</button>
                <br></br>
        </div>
        
    </div>
  )
}

export default SignIn