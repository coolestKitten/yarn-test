import axios from "axios"
import httpInstance from "../httpinstance";

export const getPopular = async () => {
    let res: any;
    const endpoint = `popular?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response;
    });
    return res;
}

export const getTopRated = async () => {
    let res: any;
    const endpoint = `top_rated?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => { 
        res = err.response;
    });
    return res;

}

export const getNowPlaying = async () => {
    let res: any;
    const endpoint = `now_playing?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => { 
        res = err.response;
    });
    return res;

}

//the error is here 
export const getMovieDetails = async (movieId: number) => {
    let res: any;
    const endpoint = `${movieId}?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => { 
        res = err.response;
    });
    return res;

}