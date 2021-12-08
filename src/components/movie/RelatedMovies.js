import styled from 'styled-components';
import { useLocation } from 'react-router';

export default function RelatedMovies({ related }) {
    const path = useLocation();
    console.log(related);
    return (
        <Container>
            <span>
                {path.pathname.includes('movie')
                    ? 'Filmes relacionados'
                    : 'Séries relacionadas'}
            </span>
            <Movies></Movies>
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
    }

    span {
        font-size: 12px;
        line-height: 14.4px;
        letter-spacing: 0.02em;
    }
`;
