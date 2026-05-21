import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import api from "../lib/axios"
import Card from "../components/Card"
const HomePage = () => {
    const [jobs, setJobs] = useState(null);
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await api.get("/cards")
                setJobs(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchJobs()
    }, [])

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto p-4 mt-6">
                {jobs != null &&
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (<Card key={job.id} card={job} />))}
                    </div>
                }
            </div>
        </div>
    )
}

export default HomePage