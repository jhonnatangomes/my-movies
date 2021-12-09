import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import createImageUrl from '../../helpers/createImageUrl';
import colors from '../../styles/colors';

export default function RelatedMovies({ related, setDetails }) {
    const path = useLocation();
    const navigate = useNavigate();

    function handleClick(id) {
        if (path.pathname.includes('movie')) {
            setDetails(null);
            navigate(`/movie/${id}`);
        }
    }

    return (
        <Container>
            <span>
                {path.pathname.includes('movie')
                    ? 'Filmes relacionados'
                    : 'Séries relacionadas'}
            </span>
            <Movies>
                {related &&
                    related.map((movie) => (
                        <Movie
                            key={movie.id}
                            onClick={() => handleClick(movie.id)}
                        >
                            <img
                                src={createImageUrl(movie.poster_path)}
                                alt={''}
                            />
                            <span>{movie.title} </span>
                            <span>({movie.release_date.split('-')[0]})</span>
                        </Movie>
                    ))}
            </Movies>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 20px;
`;

const Movies = styled.div`
    margin-top: 16px;
    display: flex;
    overflow: auto;

    div {
        margin-right: 16px;
    }
`;

const Movie = styled.div`
    img {
        width: 142px;
        height: 106px;
        object-fit: cover;
        margin-bottom: 12px;
        border-radius: 20px;
    }

    span {
        font-size: 12px;
        line-height: 14.4px;
        letter-spacing: 0.02em;
    }

    span:last-child {
        color: ${colors.runTimeGray};
    }
`;
