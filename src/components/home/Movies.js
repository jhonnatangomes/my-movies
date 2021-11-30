import styled from 'styled-components';
import soul from '../../assets/soul.jpg';
import knivesOut from '../../assets/knives-out.jpg';
import onward from '../../assets/onward.jpeg';
import mulan from '../../assets/mulan.jpeg';

export default function Movies({ category }) {
    const movies = {
        movies: [
            {
                img: soul,
                name: 'Soul (2020)',
            },
            {
                img: knivesOut,
                name: 'Knives Out (2019)',
            },
            {
                img: onward,
                name: 'Onward (2020)',
            },
            {
                img: mulan,
                name: 'Mulan (2020)',
            },
            {
                img: soul,
                name: 'Soul (2020)',
            },
            {
                img: knivesOut,
                name: 'Knives Out (2019)',
            },
            {
                img: onward,
                name: 'Onward (2020)',
            },
            {
                img: mulan,
                name: 'Mulan (2020)',
            },
        ],
        tvShows: [],
        documentaries: [],
        sports: [],
    };
    return (
        <MoviesContainer>
            {movies[category].map((movie, i) => (
                <div key={i}>
                    <img src={movie.img} alt={movie.name} />
                    <span>{movie.name}</span>
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
        height: 215px;
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
        height: 191px;
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
