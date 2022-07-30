import { useLocation } from "react-router-dom";
import Ratings from 'react-ratings-declarative';
import Swal from "sweetalert2";


export default function NormalSearchCard({ result }) {
    const location = useLocation()
    const handleDetail = (id) => {
        // navigate(`/${id}`)
    }

    const openLink = (e) => {
        e.preventDefault()
    }





    return (
        <div className="flex-col mb-3" >
            <a
                href={result.link} target="_blank" rel="noopener noreferrer"
                className="hover:underline hover:cursor-pointer font-bold font text-xl text-blue-700">{result.title}</a>
            <div className="break-words">{result.description ? result.description : 'No Description'}</div>
        </div>

    )
}