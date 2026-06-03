import { Link,useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {logout} from "../features/auth/authSlice"
const Navbar = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout =()=>{
        dispatch(logout())
        navigate("/login")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand">Student Management System</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/students">Students</Link>
                        <Link className="nav-link" to="/classes">Classes</Link>
                        <Link className="nav-link" to="/schools">Schools</Link>
                        <button onClick={handleLogout} className="btn btn-outline-danger btn-sm ms-lg-2 mt-2 mt-lg-0">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar