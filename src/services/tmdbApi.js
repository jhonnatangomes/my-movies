import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const headerConfig = () => {
    return {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        },
    };
};

const getConfiguration = () => axiosBase.get('/configuration', headerConfig());

const getPopularMovies = () =>
    axiosBase.get('/movie/popular?language=pt-BR', headerConfig());

const getPopularTvShows = () =>
    axiosBase.get('/tv/popular?language=pt-BR', headerConfig());

const getMovieDetails = (movieId) =>
    axiosBase.get(`/movie/${movieId}?language=pt-BR`, headerConfig());

const getRelatedMovies = (movieId) =>
    axiosBase.get(`/movie/${movieId}/similar?language=pt-BR`);

export {
    getPopularMovies,
    getConfiguration,
    getPopularTvShows,
    getMovieDetails,
    getRelatedMovies,
};
