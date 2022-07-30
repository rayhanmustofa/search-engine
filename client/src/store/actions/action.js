import axios from 'axios'
import { SET_CONTACTS } from './actionType'

export const fetchNormal = (query) => {
    return async (dispatch) => {

        const result = await axios({
            method: 'get',
            url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${query.replace(/ /g, "+")}`,
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Key': '5a309aa5b0msh2dbf9f6baa426f9p12d4e2jsnf065642da5d3',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })
        return result

    }
}

export const fetchImage = (query) => {
    return async (dispatch) => {

        const result = await axios({
            method: 'get',
            url: `https://google-search3.p.rapidapi.com/api/v1/image/q=${query.replace(/ /g, "+")}`,
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Key': '5a309aa5b0msh2dbf9f6baa426f9p12d4e2jsnf065642da5d3',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })
        return result

    }
}

export const fetchNews = (query) => {
    return async (dispatch) => {

        const result = await axios({
            method: 'get',
            url: `https://google-search3.p.rapidapi.com/api/v1/news/q=${query.replace(/ /g, "+")}`,
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Key': '5a309aa5b0msh2dbf9f6baa426f9p12d4e2jsnf065642da5d3',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })
        return result

    }
}

