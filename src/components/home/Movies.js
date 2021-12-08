import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getPopularMovies, getPopularTvShows } from '../../services/tmdbApi';
import config from '../../config/tmdbConfig.json';
import { useNavigate } from 'react-router';

export default function Movies({ category }) {
    const [movies, setMovies] = useState({
        movie: [],
        tv: [],
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (category === 'movie') {
            const promise = getPopularMovies();
            promise.then((res) =>
                setMovies({ ...movies, movie: res.data.results })
            );
        }
        if (category === 'tv') {
            const promise = getPopularTvShows();
            promise.then((res) =>
                setMovies({ ...movies, tv: res.data.results })
            );
        }
    }, [category]);

    return (
        <MoviesContainer>
            {movies[category].map((movie, i) => (
                <div
                    key={i}
                    onClick={() => navigate(`/${category}/${movie.id}`)}
                >
                    <img
                        src={`${config.images.secure_base_url}${config.images.poster_sizes[6]}${movie.poster_path}`}
                        alt={movie.title || movie.name}
                    />
                    <span>{movie.title || movie.name}</span>
                </div>
            ))}
        </MoviesContainer>
    );
}

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    justify-content: space-between;

    & > div:nth-child(4n),
    & > div:nth-child(4n + 1) {
        width: 154px;
        margin-bottom: 20px;

        img {
            width: 100%;
            height: 184px;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: 12px;
        }
    }

    & > div:nth-child(4n + 2),
    & > div:nth-child(4n + 3) {
        width: 154px;
        margin-bottom: 20px;

        img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: 12px;
        }
    }
`;
