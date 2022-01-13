import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import CategoryContext from '../../contexts/categoryContext';
import LastMovieContext from '../../contexts/lastMovieContext';
import getRandomElement from '../../helpers/getRandomElement';
import { getRelatedMovies, getRelatedTvShows } from '../../services/tmdbApi';
import { PageContainer, Title } from '../shared';
import Button from '../shared/button';

export default function Random() {
    const {
        lastMovieClicked,
        setLastMovieClicked,
        lastTvShowClicked,
        setLastTvShowClicked,
    } = useContext(LastMovieContext);
    const { setCategory } = useContext(CategoryContext);
    const navigate = useNavigate();

    useEffect(() => {
        const lastMovieClickedLS = localStorage.getItem('lastMovieClicked');
        const lastTvShowClickedLS = localStorage.getItem('lastTvShowClicked');

        if (lastMovieClickedLS !== null) {
            setLastMovieClicked(lastMovieClickedLS);
        }
        if (lastTvShowClickedLS !== null) {
            setLastTvShowClicked(lastTvShowClickedLS);
        }
    }, []);

    function getRandomRecommendation(type) {
        if (type === 'movie') {
            if (lastMovieClicked === -1) {
                alert(
                    'Você ainda não visualizou nenhum filme. Abra pelo menos um filme na home page para ter recomendações aleatórias'
                );
            } else {
                const promise = getRelatedMovies(lastMovieClicked);
                promise.then((res) => {
                    const randomMovie = getRandomElement(res.data.results);
                    setCategory('movie');
                    navigate(`/movie/${randomMovie.id}`);
                });
            }
        }

        if (type === 'tv') {
            if (lastTvShowClicked === -1) {
                alert(
                    'Você ainda não visualizou nenhuma série. Abra pelo menos uma série na home page para ter recomendações aleatórias'
                );
            } else {
                const promise = getRelatedTvShows(lastTvShowClicked);
                promise.then((res) => {
                    const randomTvShow = getRandomElement(res.data.results);
                    setCategory('tv');
                    navigate(`/tv/${randomTvShow.id}`);
                });
            }
        }
    }

    return (
        <PageContainer>
            <Title>Descubra uma recomendação aleatória</Title>
            <Buttons>
                <Button onClick={() => getRandomRecommendation('movie')}>
                    Me recomende um filme
                </Button>
                <Button onClick={() => getRandomRecommendation('tv')}>
                    Me recomende uma série
                </Button>
            </Buttons>
        </PageContainer>
    );
}

const Buttons = styled.div`
    height: calc(100vh - 215px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
