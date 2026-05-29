import { Link } from "react-router-dom"
const Navbar = ()=>{
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
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar