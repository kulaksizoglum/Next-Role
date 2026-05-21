import { useState } from "react"
import api from "../lib/axios"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"
import { ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router"


const CreatePage = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [salary, setSalary] = useState("")
    const [status, setStatus] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !company || !location || !salary) {
            return toast.error("Please fill all the fields")
        }
        try {
            const response = await api.post("/cards", {
                title, company, location, salary, status
            })
            if (response.status === 201) {
                toast.success("Job created successfully");
                navigate("/")
            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong");
        }
    }
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Link to={"/"} className="btn btn-ghost mb-6">
                        <ArrowLeftIcon className="size-5" />
                        <span>Back to Home</span>
                    </Link>
                    <div className="card bg-white/70 back drop-blur-md shadow-2xl">

                        <div className="card-body">
                            <h2 className="card-title text-3xl font-semi-bold text-[#2f1f46] mb-4" >Create a New Job Application</h2>
                            <div className="">
                                <form onSubmit={handleSubmit()}>
                                    <div className="form-control mb-4">
                                        <label className="label mr-4 mb-2">
                                            <span className="label-text font-medium">Role</span>
                                        </label>
                                        <input type="text" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30" value={title} placeholder="Write your role.." onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="form-control mb-4">
                                        <label className="label mr-4 mb-2">
                                            <span className="label-text font-medium">Company</span>
                                        </label>
                                        <input type="text" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30" value={company} placeholder="Company name.." onChange={(e) => setCompany(e.target.value)} />
                                    </div>
                                    <div className="form-control mb-4">
                                        <label className="label mr-4 mb-2">
                                            <span className="label-text font-medium">Location</span>
                                        </label>
                                        <input type="text" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30" value={location} placeholder="Company Location.." onChange={(e) => setLocation(e.target.value)} />
                                    </div>
                                    <div className="form-control mb-4 ">
                                        <label className="label mr-4 mb-2">
                                            <span className="label-text font-medium">Salary</span>
                                        </label>
                                        <input type="text" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30" value={salary} placeholder="Expected Salary.." onChange={(e) => setSalary(e.target.value)} />
                                    </div>
                                    <div className="form-control mb-4 flex flex-col">
                                        <label className="label ">
                                            <span className="label-text font-medium">Status</span>
                                        </label>

                                        <select className="select select-bordered w-1/2 mt-4 label mr-4" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option>Applied</option>
                                            <option>Interview</option>
                                            <option>Rejected</option>
                                            <option>Offer</option>
                                        </select>
                                    </div>
                                    <div className="card-actions justify-end" >
                                        <button className="btn btn-primary px-8" type="submit" > Submit </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePage