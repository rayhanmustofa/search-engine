import { Routes, Route, Link, useNavigate, useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ItemCard from "../components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage, fetchNews, fetchNormal } from "../store/actions/action";
import NormalSearchCard from "../components/NormalSearchCard";
import ImageSearchCard from "../components/ImageSearchCard";
import NewsSearchCard from "../components/NewsSearchCard";



export default function ViewNewsSearch() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


    useEffect(() => {
        setLoading(true)
        // console.log(loading)
        console.log(windowDimensions.width)
        dispatch(fetchNews(searchParams.get("q")))
            .then((result) => {
                console.log(result)
                setResults(result.data.entries)
            })
            .finally(() => {
                setLoading(false)
                // console.log(loading)
            })



    }, [searchParams.get("q")])


    return (
        <div className="flex-col mx-auto mt-10 p-5 border-4 border-slate-300 justify-center"
            style={{ width: windowDimensions.width < 500 ? "95%" : "50%" }}>


            <h1 className="text-2xl font-bold mb-5"> News Search Results</h1>
            <div className="flex flex-wrap">
                {loading && <img className="mx-auto "
                    style={{ width: windowDimensions.width < 500 ? "20vw" : "5vw", height: "auto" }}
                    src={require("../_img/loading.gif")} />}

                {!loading && results.map((result, num) => {
                    return <NewsSearchCard result={result} key={num} />
                })}
            </div>

        </div>


    )
}