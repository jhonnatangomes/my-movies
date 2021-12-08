import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';
import { AiOutlineClockCircle, AiFillStar } from 'react-icons/ai';
import config from '../../config/tmdbConfig.json';
import {
    getMovieDetails,
    getTvShowDetails,
    getMovieWatchProviders,
    getTvShowProviders,
} from '../../services/tmdbApi';
import { PageContainer } from '../shared';
import convertDate from '../../helpers/convertDate';
import colors from '../../styles/colors';

export default function Movie() {
    const [details, setDetails] = useState(null);
    const [watchProviders, setWatchProviders] = useState(null);
    const { id } = useParams();
    const path = useLocation();

    useEffect(() => {
        if (path.pathname.includes('movie')) {
            const promise = getMovieDetails(id);
            const watchProvidersPromise = getMovieWatchProviders(id);
            promise.then((res) => setDetails(res.data));
            watchProvidersPromise.then((res) =>
                setWatchProviders(res.data.results.BR)
            );
        }
        if (path.pathname.includes('tv')) {
            const promise = getTvShowDetails(id);
            const watchProvidersPromise = getTvShowProviders(id);
            promise.then((res) => setDetails(res.data));
            watchProvidersPromise.then((res) =>
                setWatchProviders(res.data.results.BR)
            );
        }
    }, []);

    return (
        <>
            {details ? (
                <PosterImg
                    src={`${config.images.secure_base_url}${config.images.backdrop_sizes[3]}${details.backdrop_path}`}
                />
            ) : (
                ''
            )}
            <PageContainer>
                <MovieTitle>{details?.title || details?.name}</MovieTitle>
                <RunTimeAndScore>
                    <div>
                        <AiOutlineClockCircle />
                        <span>
                            {details?.runtime || details?.episode_run_time}{' '}
                            minutos
                        </span>
                    </div>
                    <div>
                        <AiFillStar />
                        <span>{details?.vote_average} (TMDb)</span>
                    </div>
                </RunTimeAndScore>
                <DivisionLine />
                <ReleaseDateAndGenres>
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
                </ReleaseDateAndGenres>
                <DivisionLine />
                <AvailableStreams>
                    <span>Disponível em</span>
                    <Streams>
                        {watchProviders &&
                            watchProviders.flatrate.map((stream, i) => (
                                <div key={i}>
                                    <img
                                        src={`${config.images.secure_base_url}${config.images.logo_sizes[6]}${stream.logo_path}`}
                                        alt={''}
                                    />
                                </div>
                            ))}
                    </Streams>
                </AvailableStreams>
                <DivisionLine />
                <Description>
                    <span>Sinopse</span>
                    <p>{details?.overview}</p>
                </Description>
            </PageContainer>
        </>
    );
}

const PosterImg = styled.img`
    width: 100%;
    height: 287px;

    object-fit: cover;
`;

const MovieTitle = styled.p`
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 29px;
`;

const RunTimeAndScore = styled.div`
    font-size: 12px;
    line-height: 14.5px;
    color: ${colors.runTimeGray};
    display: flex;
    margin-bottom: 15px;

    div {
        display: flex;
        align-items: center;

        span {
            font-size: 12px;
            margin-left: 6px;
            margin-right: 18px;
        }
    }
`;

const DivisionLine = styled.div`
    width: 100%;
    height: 0px;
    border: 0.2px solid ${colors.divisionGrey};
`;

const ReleaseDateAndGenres = styled.div`
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

const AvailableStreams = styled.div`
    margin: 16px 0 4px 0;
`;

const Streams = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;

    div {
        margin-right: 12px;
        margin-bottom: 10px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }
    }
`;

const Description = styled.div`
    margin-top: 16px;

    p {
        margin-top: 12px;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.02em;
    }
`;
