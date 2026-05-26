import { Link } from "react-router"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
const Navbar = () => {
    const logout = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }
    return (
        <header className="bg-linear-to-br from-slate-50 to-violet-100 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">NextRole</h1>
                    <div className="flex items-center gap-4">
                        {!user && (
                            <div className="flex items-center gap-4">
                                <Link className="btn btn-ghost" to="/login"><span className="text-xl font-bold text-primary font-mono tracking-tight">Login</span></Link>
                                <Link className="btn btn-ghost" to="/signup"><span className="text-xl font-bold text-primary font-mono tracking-tight">Sign up</span></Link>
                            </div>
                        )}

                        {user && (
                            <div className="flex items-center">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl font-bold text-primary font-mono tracking-tight">Welcome</span>
                                    <span className="text-xl font-bold text-primary font-mono tracking-tight mr-35"> {user.email}</span>

                                    <Link to={"/create"} className="btn btn-ghost ml-8">

                                        <span className="text-xl font-bold text-primary font-mono tracking-tight">New Job Hunting</span>
                                    </Link>
                                    <button className="btn btn-ghost" onClick={handleClick}> <span className="text-xl font-bold text-primary font-mono tracking-tight">Logout</span> </button>
                                </div>

                            </div>)}

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar