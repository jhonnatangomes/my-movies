import {
    getPopularMovies,
    getPopularTvShows,
    getMovieDetails,
    getMovieWatchProviders,
    getTvShowDetails,
    getTvShowProviders,
    getRelatedMovies,
    getRelatedTvShows,
} from './tmdbApi';

async function getHomePageInfo(category) {
    if (category === 'movie') {
        const movies = await getPopularMovies();
        return {
            movie: movies.data.results,
            tv: [],
        };
    }
    if (category === 'tv') {
        const tvShows = await getPopularTvShows();
        return {
            movie: [],
            tv: tvShows.data.results,
        };
    }
}

async function getDetails(path, id) {
    if (path.pathname.includes('movie')) {
        const movieDetails = await getMovieDetails(id);
        const watchProviders = await getMovieWatchProviders(id);
        const relatedMovies = await getRelatedMovies(id);
        return {
            details: movieDetails.data,
            watchProviders: watchProviders.data.results.BR,
            related: relatedMovies.data.results,
        };
    }
    if (path.pathname.includes('tv')) {
        const tvShowDetails = await getTvShowDetails(id);
        const watchProviders = await getTvShowProviders(id);
        const relatedTvShows = await getRelatedTvShows(id);
        return {
            details: tvShowDetails.data,
            watchProviders: watchProviders.data.results.BR,
            related: relatedTvShows.data.results,
        };
    }
}

export { getHomePageInfo, getDetails };
