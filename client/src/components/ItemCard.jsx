import { useLocation } from "react-router-dom";
import Ratings from 'react-ratings-declarative';
import Swal from "sweetalert2";


export default function ItemCard({ result }) {



    return (
        <div className="mx-auto flex w-[23%] flex-col justify-center bg-whitemy-5 p-2 border-2 boder-slate-400">
            <img className="aspect-[3/4] w-30 object-fit border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWp_myfwlfRqr05m263BtnAZfqC-X4RyBTqEhaaRwRq1neoD9WeKCEuxurw&s" />
            <h3 className="m-4 text-lg font-medium text-slate-600 pb-2">Cristiano Ronaldo -... en.wikipedia.org</h3>
        </div>

    )
}