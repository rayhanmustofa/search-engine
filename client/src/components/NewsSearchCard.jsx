import { useLocation } from "react-router-dom";
import Ratings from 'react-ratings-declarative';
import Swal from "sweetalert2";
import { useState } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

// const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


export default function NewsSearchCard({ result }) {
    return (
        <div className="mx-auto flex w-[47%] flex-col justify-center bg-whitemy-5 p-4 border-2 boder-slate-400 mb-3"
            style={{ width: getWindowDimensions().width < 500 ? "95%" : "47%" }}>
            <a href={result.link} target="_blank" rel="noopener noreferrer"
                className="hover:underline hover:cursor-pointer text-m font-medium text-blue-700 mb-1">{result.title}</a>
            <div className="text-sm" > {result.published} </div>
            <div className="text-sm" >Source : <a
                className="hover:underline hover:cursor-pointer text-teal-500"
                href={result.source.href} target="_blank" rel="noopener noreferrer" >{result.source.title}</a> </div>
        </div>

    )
}