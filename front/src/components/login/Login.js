import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handelLogin = async(values)=>{
    try{
const res = await axios.post('http://localhos:4000/auth/login',values)
console.log('res',res.data.token)
await localStorage.setItem('token',res.data.token)
navigate('/app/privateRoute')
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='bodyLogin'>
      <div className="containerL" >
  <div className="top" />
  <div className="bottom" />
  <div className="center">
    <h2>Please Login</h2>
    <input type="email" placeholder="email" value={email} onChange={(e=>setEmail(e.target.value))}/>
    <input type="password" placeholder="password" value={password} onChange={(e=>setPassword(e.target.value))}/>
    <h2>&nbsp;</h2>
    <button onClick={()=>handelLogin({email,password})}>log in</button>
  </div>
</div>

    </div>
  )
}

export default Login
