
import { LockIcon } from "lucide-react"
import { Link } from "react-router"

const AuthRequiredUI = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center p-6">
                    <div className="shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                        <LockIcon className="size-10 text-primary" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">
                            Authentication Required
                        </h3>

                        <p className="text-base-content mb-1">
                            You need to be logged in to view and manage your job applications.
                        </p>

                        <p className="text-sm text-base-content/70 mb-4">
                            Please log in to continue, or create a new account if you do not have one yet.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <Link to="/login" className="btn btn-primary btn-sm">
                                Login
                            </Link>

                            <Link to="/signup" className="btn btn-ghost btn-sm">
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthRequiredUI