import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {loginUser,registerUser} from "../features/auth/authSlice"
import { useNavigate,useLocation } from "react-router-dom";

const Auth = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const isLogin = location.pathname === "/login"

    const {status,error,isAuthenticated} = useSelector((state)=>state.auth)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const userData = {username,password}

        if(isLogin){
            const result = await dispatch(loginUser(userData))
            if(result.meta.requestStatus === "fulfilled"){
                setUsername("")
                setPassword("")
                navigate("/students")
            }
        }
        else{
           const result = await dispatch(registerUser(userData))
           if(result.meta.requestStatus === "fulfilled"){
            setUsername("")
            setPassword("")
            navigate("/login")
           }
        }
    }
    // useEffect(()=>{
    //     if(isAuthenticated){
    //         navigate("/students")
    //     }
    // },[isAuthenticated,navigate])
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow" style={{width:"400px"}}>
                <h2 className="text-center mb-4">{isLogin ? "Login" :"Register"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100">
                        {isLogin ? "Login" :"Register"}
                    </button>
                </form>
                {error && <p className="text-center text-danger mt-3">{error}</p> }
                <button type="button" onClick={()=>navigate(isLogin ? "/register":"/login")} className="btn btn-link mt-3">
                    {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                </button>
            </div>
        </div>
        
    )
}
export default Auth;