import { PageContainer, Title } from '../shared';
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
