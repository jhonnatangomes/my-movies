import styled from 'styled-components';
import { PageContainer } from '../shared';
import { SearchBar, Categories, Movies } from '..';

export default function Home({ category, setCategory }) {
    return (
        <PageContainer>
            <Title>Encontre filmes, séries de TV e mais...</Title>
            <SearchBar />
            <Categories
                category={category}
                setCategory={setCategory}
            ></Categories>
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
