import styled from 'styled-components';
import convertDate from '../../helpers/convertDate';
import colors from '../../styles/colors';

export default function ReleaseDateAndGenres({ details }) {
    return (
        <Container>
            <div>
                <span>
                    Data de <br />
                    lançamento
                </span>
                <p>
                    {convertDate(details?.release_date) ||
                        convertDate(details?.first_air_date)}
                </p>
            </div>
            <div>
                <span>Gêneros</span>
                <Genres>
                    {details?.genres.map((genre, i) => (
                        <Genre key={i}>{genre.name}</Genre>
                    ))}
                </Genres>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    margin: 16px 0;
    & > div:first-child {
        margin-right: 47px;
    }

    & > div {
        span {
            display: inline-block;
            margin-bottom: 12px;
        }
    }

    p {
        font-size: 12px;
        color: ${colors.runTimeGray};
        letter-spacing: 0.02em;
    }
`;

const Genres = styled.div`
    display: flex;
    flex-wrap: wrap;

    div {
        margin-right: 12px;
        margin-bottom: 10px;
    }
`;

const Genre = styled.div`
    font-size: 12px;
    letter-spacing: 0.02em;
    color: ${colors.runTimeGray};
    line-height: 14.4px;
`;
