import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {loginUser,registerUser} from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom";

const Auth = ()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [isLogin,setIsLogin]=useState(true)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {status,error,isAuthenticated} = useSelector((state)=>state.auth)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const userData = {username,password}

        if(isLogin){
            dispatch(loginUser(userData))
        }
        else{
            dispatch(registerUser(userData))
        }
    }
    useEffect(()=>{
        if(isAuthenticated){
            navigate("/students")
        }
    },[isAuthenticated,navigate])
    return (
        <div>
            <h2>{isLogin ? "Login" :"Register"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br /><br />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br /><br />
                <button type="submit">
                    {isLogin ? "Login" :"Register"}
                </button>
            </form>
            {error && <p>{error}</p> }
            <button type="button" onClick={()=>setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </button>
        </div>
    )
}
export default Auth;