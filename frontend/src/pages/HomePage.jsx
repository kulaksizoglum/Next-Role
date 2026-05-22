import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import api from "../lib/axios"
import Card from "../components/Card"
import CardsNotFound from "../components/CardNotFound"
import toast from "react-hot-toast"
import RateLimitedUI from "../components/RateLimitedUI"
const HomePage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isRateLimited, setIsRateLimited] = useState(false);


    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await api.get("/cards")
                setJobs(response.data)
                console.log(response.data)
                setIsRateLimited(false);
            } catch (error) {
                console.log(error)
                if (error.response?.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed to load notes");
                }
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])

    return (
        <div className="min-h-screen">
            <Navbar />
            {isRateLimited && <RateLimitedUI />}

            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
                {jobs.length === 0 && <CardsNotFound />}
                {jobs.length > 0 &&
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (<Card key={job.id} card={job} setJobs={setJobs} />))}
                    </div>
                }
            </div>
        </div>
    )
}

export default HomePage