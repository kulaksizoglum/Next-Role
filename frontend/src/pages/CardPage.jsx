import { Link, useParams, useNavigate } from "react-router"
import { ArrowLeftIcon, Trash2Icon, LoaderIcon } from "lucide-react"
import { useEffect, useState } from "react"
import api from "../lib/axios"
import toast from "react-hot-toast"
import { useAuthContext } from "../hooks/useAuthContext"


const CardDetailPage = () => {
    const [saving, setSaving] = useState(false)
    const [loading, setLoading] = useState(true);
    const [card, setCard] = useState("")
    const { id } = useParams()
    const { user } = useAuthContext()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await api.get(`/cards/${id}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${user.token}`
                        }
                    }
                )
                setCard(response.data)
            } catch (error) {
                console.log(error)
                toast.error("Error fetching data")
            } finally {
                setLoading(false)
            }
        }
        fetchNote()
    }, [id])

    const handleDelete = async (e) => {
        if (!user) {
            return
        }
        e.preventDefault()
        if (!window.confirm("Are you sure you want to delete this note?")) return;
        try {
            await api.delete(`/cards/${id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                })
            toast.success("Application deleted successfully")
            navigate("/")
        } catch (error) {
            toast.error("Error deleting application")
            console.log("ERRORR IS ", error)
        }
    }

    const handleSave = async () => {
        if (!card.title.trim() || !card.company.trim() || !card.location.trim() || !card.salary.trim()) {
            toast.error("Please fill all the fields")
            return
        }
        setSaving(true)
        try {
            const response = await api.put(`/cards/${id}`, card,
                {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                }
            )
            if (response.status === 200) {
                toast.success("Card updated successfully")
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to update note")
        } finally {
            setSaving(false)
        }
    }
    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10" />
            </div>
        );
    }
    return (

        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/" className="btn btn-ghost">
                            <ArrowLeftIcon className="h-5 w-5" />
                            Back to Notes
                        </Link>
                        <button onClick={handleDelete} className="btn btn-error btn-outline">
                            <Trash2Icon className="h-5 w-5" />
                            Delete Note
                        </button>
                    </div>

                    <div className="card bg-white/70 back drop-blur-md shadow-2xl ">
                        <div className="card-body">
                            <form>
                                <div className="form-control mb-4">
                                    <label className="label mr-4 mb-2">
                                        <span className="label-text font-medium">Role</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30" value={card.title} placeholder="Write your role.." onChange={(e) => setCard({ ...card, title: e.target.value })} />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label mr-4 mb-2">
                                        <span className="label-text font-medium">Company</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30" value={card.company} placeholder="Company name.." onChange={(e) => setCard({ ...card, company: e.target.value })} />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label mr-4 mb-2">
                                        <span className="label-text font-medium">Location</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30" value={card.location} placeholder="Company Location.." onChange={(e) => setCard({ ...card, location: e.target.value })} />
                                </div>
                                <div className="form-control mb-4 ">
                                    <label className="label mr-4 mb-2">
                                        <span className="label-text font-medium">Salary</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/30" value={card.salary} placeholder="Expected Salary.." onChange={(e) => setCard({ ...card, salary: e.target.value })} />
                                </div>
                                <div className="form-control mb-4 flex flex-col">
                                    <label className="label ">
                                        <span className="label-text font-medium">Status</span>
                                    </label>

                                    <select className="select select-bordered w-1/2 mt-4 label mr-4" value={card.status} onChange={(e) => setCard({ ...card, status: e.target.value })}>
                                        <option>Applied</option>
                                        <option>Interview</option>
                                        <option>Rejected</option>
                                        <option>Offer</option>
                                    </select>
                                </div>
                                <div className="card-actions justify-end" >
                                    <button type="button" className="btn btn-primary px-8" onClick={handleSave} disabled={saving}> {saving ? "Saving... " : "Save Changes"} </button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetailPage