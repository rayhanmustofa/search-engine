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


export default function ImageSearchCard({ result }) {
    return (
        <div className="mx-auto flex w-[30%] flex-col justify-center bg-whitemy-5 p-1 border-2 boder-slate-400 mb-3"
            style={{ width: getWindowDimensions().width < 500 ? "49%" : "30%" }}>
            <img className=" w-30 object-fit border" src={result.image.src} />
            <a
                href={result.link.href} target="_blank" rel="noopener noreferrer"
                className="hover:underline hover:cursor-pointer m-4 text-m font-medium text-slate-600 pb-2 break-words"
                style={{ fontSize: getWindowDimensions().width < 500 ? "medium" : "lg" }}>{result.link.title}</a>
        </div>

    )
}