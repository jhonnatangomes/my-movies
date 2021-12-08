import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

import { PageContainer } from '../shared';
import { getDetails } from '../../services/getInfo';
import {
    RunTimeAndScore,
    ReleaseDateAndGenres,
    AvailableStreams,
    RelatedMovies,
} from '..';
import colors from '../../styles/colors';
import createImageUrl from '../../helpers/createImageUrl';

export default function Movie() {
    const [details, setDetails] = useState(null);
    const [watchProviders, setWatchProviders] = useState(null);
    const [related, setRelated] = useState(null);
    const { id } = useParams();
    const path = useLocation();

    useEffect(() => {
        (async function () {
            const result = await getDetails(path, id);
            setDetails(result.details);
            setWatchProviders(result.watchProviders);
            setRelated(result.related);
        })();
    }, []);

    return (
        <>
            {details ? (
                <PosterImg src={createImageUrl(details.backdrop_path)} />
            ) : (
                ''
            )}
            <PageContainer>
                <MovieTitle>{details?.title || details?.name}</MovieTitle>
                <RunTimeAndScore details={details} />
                <DivisionLine />
                <ReleaseDateAndGenres details={details} />
                <DivisionLine />
                <AvailableStreams watchProviders={watchProviders} />
                <DivisionLine />
                <Description>
                    <span>Sinopse</span>
                    <p>{details?.overview}</p>
                </Description>
                <RelatedMovies related={related} />
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

const DivisionLine = styled.div`
    width: 100%;
    height: 0px;
    border: 0.2px solid ${colors.divisionGrey};
`;

const Description = styled.div`
    margin-top: 16px;

    p {
        margin-top: 12px;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.02em;
        color: ${colors.runTimeGray};
    }
`;
