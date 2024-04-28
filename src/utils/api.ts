import {Movie} from "./types";

async function fetchMovies(url: string): Promise<Movie[]> {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTA2ODFkYTc3YzE0ZGI0NjMxMzY4NmEzNGZlNzQ0MCIsInN1YiI6IjY2MmNkZDVjMDI4ZjE0MDEyMjY4NzQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mPOPBTN8H5Qxq19aStZXiZMSol_5qN09IdJPyj-RdWc'
        }
    });
    const data = await response.json();
    return data.results;
}

export const getPopularMovies = () => fetchMovies('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
export const getUpcomingMovies = () => fetchMovies('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1');
export const getTopMovies = () => fetchMovies('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
export const getNowPlayingMovies = () => fetchMovies('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1');
