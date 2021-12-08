import styled from 'styled-components';
import { useState } from 'react';
import { PageContainer } from '../shared';
import SearchBar from '../searchBar/SearchBar';
import Categories from './Categories';
import Movies from './Movies';

export default function Home() {
    const [category, setCategory] = useState('movie');

    return (
        <PageContainer>
            <Title>Encontre filmes, séries de TV e mais...</Title>
            <SearchBar />
            <Categories setCategory={setCategory}></Categories>
            <Movies category={category} />
        </PageContainer>
    );
}

const Title = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.02em;
    margin-top: 36px;
    margin-bottom: 20px;
`;
