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

const getRelatedMovies = (movieId) =>
    axiosBase.get(
        `/movie/${movieId}/recommendations?language=pt-BR`,
        headerConfig()
    );

const getPopularTvShows = () =>
    axiosBase.get('/tv/popular?language=pt-BR', headerConfig());

const getRelatedTvShows = (tvShowId) =>
    axiosBase.get(
        `/tv/${tvShowId}/recommendations?language=pt-BR`,
        headerConfig()
    );

const getMovieDetails = (movieId) =>
    axiosBase.get(`/movie/${movieId}?language=pt-BR`, headerConfig());

const getTvShowDetails = (tvShowId) =>
    axiosBase.get(`/tv/${tvShowId}?language=pt-BR`, headerConfig());

const getMovieWatchProviders = (movieId) =>
    axiosBase.get(`/movie/${movieId}/watch/providers`, headerConfig());

const getTvShowProviders = (tvShowId) =>
    axiosBase.get(`/tv/${tvShowId}/watch/providers`, headerConfig());

const searchMulti = (query) =>
    axiosBase.get(
        `/search/multi?language=pt-BR&query=${query}`,
        headerConfig()
    );

const getRandomMovie = () => axiosBase.get('/discover/movie', headerConfig());

export {
    getConfiguration,
    getPopularMovies,
    getRelatedMovies,
    getPopularTvShows,
    getRelatedTvShows,
    getMovieDetails,
    getTvShowDetails,
    getMovieWatchProviders,
    getTvShowProviders,
    searchMulti,
    getRandomMovie,
};
