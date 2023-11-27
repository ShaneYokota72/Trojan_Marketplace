"use client"
import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

async function login(username: String, password: String) {
  const res = await fetch('http://localhost:8000/auth/login', {
    method: 'POST',  
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password}),
  })
 
  if (res.status === 200) {
    // successful sign up
    return true
  } else {
    // unsuccessful sign up
    return false
  }
}

const Login = () => {
  const router = useRouter();

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const [callapi, setcallapi] = useState(false)
  const [redirect, setredirect] = useState(false)

  useEffect(() => {
    if(callapi){
      const api = async () => {
        const response = await login(username, password);
        if (response) {
          console.log('successful login');
          setredirect(true);
        } else {
          console.log('unsuccessful login');
          alert('Unsuccessful login. Please Try Again');
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

  if (redirect) {
    router.push('/marketplaceuser')
  }

  return (
    <div  className = 'grid border-2 mt-20 ml-[25rem] h-[60vh] w-[80vh]  bg-white pl-20 pt-24'>
        {/* place-content-center mt-24 ml-72 hb-40 w-32 p-32*/}
        <p className='text-accent mb-32 text-xl font-semibold '>Login</p>
        <div className = ' -mt-44'>
            <input type="text" placeholder = "Username" value={username} onChange={e => setusername(e.target.value)} className="input input-bordered w-[30rem] rounded-none"></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} className="input input-bordered w-[30rem] rounded-none" />
            <br></br>
            <br></br>
            {/* <Link href={'marketplaceuser'}>
              <button onClick={() => setcallapi(true)} className="btn btn-accent btn-active btn-large w-72 rounded-none">Login</button>
            </Link> */}
            <button onClick={() => setcallapi(true)} className="btn btn-accent btn-active btn-large w-72 rounded-none">Login</button>
            <br></br>
        </div>
        
    </div>
  )
}

export default Login