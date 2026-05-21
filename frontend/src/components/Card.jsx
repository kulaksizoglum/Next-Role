
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router"
const Card = ({ card }) => {
    console.log(card)
    return (
        <Link
            to={`/cards/${card._id}`}
            className="card bg-[rgba(255,192,203,0.15)] hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#efb6ee]"
        >
            <div className="card-body">
                <h3 className="card-title  text-violet-950 font-serif">{card.title}</h3>
                <div className="grid grid-cols-2 gap-2">
                    <p className="text-[#6b5b7a] line-clamp-1 font-mono">{card.company}</p>
                    <p className="text-[#6b5b7a] line-clamp-1 font-mono">{card.status}</p>
                    <p className="text-[#6b5b7a] line-clamp-1 font-mono">{card.location}</p>
                    <p className="text-[#6b5b7a]/70 line-clamp-1 font-mono">{card.salary} TL</p>

                </div>
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60">
                        {(card.createdAt)}
                    </span>
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4" />
                        <button
                            className="btn btn-ghost btn-xs text-error"

                        >
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card