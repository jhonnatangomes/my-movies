import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { getHomePageInfo } from '../../services/getInfo';
import createImageUrl from '../../helpers/createImageUrl';

export default function Movies({ category }) {
    const [movies, setMovies] = useState({
        movie: [],
        tv: [],
    });
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            const result = await getHomePageInfo(category);
            setMovies(result);
        })();
    }, [category]);

    return (
        <MoviesContainer>
            {movies[category].map((movie, i) => (
                <div
                    key={i}
                    onClick={() => navigate(`/${category}/${movie.id}`)}
                >
                    <img
                        src={createImageUrl(movie.poster_path)}
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

    & > div {
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
`;
