import { Link, useLocation } from "react-router-dom";
import Ratings from 'react-ratings-declarative';
import Swal from "sweetalert2";


export default function Navbar() {


    return (
        <header className="flex items-center justify-between py-2 bg-slate-800 ">
            <span to="/" className="text-xl uppercase font-bold text-slate-100 pl-3">PasarNow Test</span>
            <ul className="inline-flex items-center">
                <li className="px-2 md:px-4">
                    <Link to="/" className="cursor-pointer font-semibold text-slate-100">
                        Home
                    </Link>
                </li>
            </ul>
        </header>

    )
}