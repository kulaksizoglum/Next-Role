import { useState } from "react"
import { ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router"
import { useSignup } from "../hooks/useSignup.jsx"
const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
        await signup(email, password)
    }

    return (
        <div className="min-h-screen">

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Link to={"/"} className="btn btn-ghost mb-6">
                        <ArrowLeftIcon className="size-5" />
                        <span>Back to Home</span>
                    </Link>
                    <div className="card bg-white/70 back drop-blur-md shadow-2xl">

                        <div className="card-body">
                            <h2 className="card-title text-3xl font-semi-bold text-[#2f1f46] mb-4" >Signup</h2>
                            <form onSubmit={handleSubmit}>

                                <div className="form-control mb-4">
                                    <label className="label mr-4 mb-2">
                                        <span className="label-text font-medium">Email: </span>
                                    </label>
                                    <input
                                        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label mr-4 mb-2">
                                        <span className="label-text font-medium">Password: </span>
                                    </label>
                                    <input
                                        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>
                                <div className="card-actions justify-end" >
                                    <button className="btn btn-primary px-8" type="submit" disabled={isLoading}> Register </button>
                                </div>
                                {error && <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"> {error}</div>}





                            </form>
                        </div>
                    </div>
                    <div>
                        <p className="card-title text-sm font-semibold text-[#2f1f46] mb-4 mt-20 ml-40">Already have an account? <Link className="btn btn-ghost" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signup