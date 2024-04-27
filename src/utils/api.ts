import {Movie} from "./types";

export const getPopularMovies = async () => {
    const response = await  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTA2ODFkYTc3YzE0ZGI0NjMxMzY4NmEzNGZlNzQ0MCIsInN1YiI6IjY2MmNkZDVjMDI4ZjE0MDEyMjY4NzQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mPOPBTN8H5Qxq19aStZXiZMSol_5qN09IdJPyj-RdWc'
        }
    })
    const data = await response.json();
    return data.results as  Promise<Movie[]>;
}

export const getUpcomingMovies = async () => {
    const response = await  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTA2ODFkYTc3YzE0ZGI0NjMxMzY4NmEzNGZlNzQ0MCIsInN1YiI6IjY2MmNkZDVjMDI4ZjE0MDEyMjY4NzQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mPOPBTN8H5Qxq19aStZXiZMSol_5qN09IdJPyj-RdWc'
        }
    })
    const data = await response.json();
    return data.results as  Promise<Movie[]>;
}


