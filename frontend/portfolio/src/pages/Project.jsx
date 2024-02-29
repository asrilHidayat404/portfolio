import { useEffect } from "react"
import { Navigate, Link } from "react-router-dom"
const Project = ({loggedIn, setLoggedIn}) => {
    useEffect(() => {
        console.log(loggedIn)
    }, [loggedIn])

    if (!loggedIn) {
        return <Navigate to="/log-in" />
    }
    const handleLogOut = () => {
        localStorage.removeItem("loggedIn")
        setLoggedIn(false)
    }
    return (
        <div>
            <h1>My Projects</h1>
            <Link 
                to="/"
                className="underline cursor-pointer"
                onClick={handleLogOut}    
            >log out
            </Link>
        </div>
    )
}

export default Project