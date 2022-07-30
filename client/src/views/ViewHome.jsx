import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ItemCard from "../components/ItemCard";
// import { useDispatch, useSelector } from "react-redux";



export default function ViewHome() {
    const navigate = useNavigate();
    const location = useLocation()
    const [query, setQuery] = useState('')
    const [searchType, setSearchType] = useState('normal');

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());




    const searchHandle = (e) => {
        e.preventDefault()
        navigate(`/${searchType}?q=${query}`)

    }

    return (
        <div>
            <header className="flex items-center justify-between py-2 bg-slate-800 ">
                <span to="/" className="text-xl uppercase font-bold text-slate-100 pl-3">PasarNow</span>
                <ul className="inline-flex items-center">
                    <li className="px-2 md:px-4">
                        <button onClick={() => { setSearchType(`normal`) }} className="cursor-pointer font-semibold text-slate-100 px-2" style={{ textDecoration: searchType === 'normal' ? 'underline' : '' }}>
                            Normal
                        </button>
                        <button onClick={() => { setSearchType(`image`) }} className="cursor-pointer font-semibold text-slate-100 px-2" style={{ textDecoration: searchType === 'image' ? 'underline' : '' }}>
                            Image
                        </button>
                        <button onClick={() => { setSearchType(`news`) }} className="cursor-pointer font-semibold text-slate-100 px-2" style={{ textDecoration: searchType === 'news' ? 'underline' : '' }}>
                            News
                        </button>
                    </li>
                </ul>
            </header>

            <div className="" style={{ display: "flex", justifyContent: "center" }}>

                <div className="" style={{ width: windowDimensions.width < 500 ? "95%" : "50%" }}>
                    <form className="bg-slate-400 p-4 flex" style={{ marginTop: "3%" }}
                        onSubmit={searchHandle}>
                        <input
                            className="p-1 mx-1 grow"
                            type="text"
                            placeholder="Type here..."
                            onChange={(e) => { setQuery(e.target.value) }}></input>
                        <button className="bg-slate-700 text-white px-3 py-1 mx-1 "
                        >Search</button>
                    </form>
                </div>
            </div>

        </div>



    )
}