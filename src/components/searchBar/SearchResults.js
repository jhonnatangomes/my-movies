import styled from 'styled-components';
import { useNavigate } from 'react-router';

import colors from '../../styles/colors';
import createImageUrl from '../../helpers/createImageUrl';

export default function SearchResults({ results }) {
    const navigate = useNavigate();

    return (
        <Results>
            {results &&
                results.results.map((result) => (
                    <div
                        key={result.id}
                        onClick={() =>
                            navigate(`/${result.media_type}/${result.id}`)
                        }
                    >
                        <img
                            src={createImageUrl(result.poster_path)}
                            alt={''}
                        />
                        {result.title || result.name}
                    </div>
                ))}
        </Results>
    );
}

const Results = styled.div`
    width: 100%;
    background-color: ${colors.inputBlack};
    border-radius: 0 0 20px 20px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: ${colors.inputGray};
    max-height: 144px;
    overflow: auto;

    div {
        height: 48px;
        padding: 16px 0 16px 52px;
        position: relative;

        img {
            position: absolute;
            left: 12px;
            top: 12px;
            width: 24px;
            height: 24px;
        }
    }
`;
