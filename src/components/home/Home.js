import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { PageContainer, Input } from '../shared';
import Categories from './Categories';
import Movies from './Movies';

export default function Home() {
    const [category, setCategory] = useState('movies');
    return (
        <PageContainer>
            <Title>Encontre filmes, séries de TV e mais...</Title>
            <InputAndSearch>
                <SearchIcon />
                <Input placeholder="Digite um filme..." />
            </InputAndSearch>
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

const InputAndSearch = styled.div`
    position: relative;
`;

const SearchIcon = styled(AiOutlineSearch)`
    position: absolute;
    font-size: 24px;
    left: 12px;
    top: 12px;
`;
