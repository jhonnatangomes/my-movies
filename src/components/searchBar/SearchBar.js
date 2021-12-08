import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import colors from '../../styles/colors';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { searchMulti } from '../../services/tmdbApi';
import config from '../../config/tmdbConfig.json';
import { useNavigate } from 'react-router';

export default function SearchBar() {
    const [openInput, setOpenInput] = useState(false);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(null);
    const navigate = useNavigate();

    function openInputBox(e) {
        if (e.target.value.length) {
            setOpenInput(true);
            const promise = searchMulti(e.target.value);
            promise
                .then((res) => setResults(res.data))
                .catch((err) => console.log(err.response));
        } else {
            setOpenInput(false);
        }
        setSearch(e.target.value);
    }

    return (
        <InputAndSearch>
            <SearchIcon />
            <Input
                placeholder="Digite um filme..."
                open={openInput}
                value={search}
                minLength={3}
                debounceTimeout={300}
                onChange={openInputBox}
            />
            {openInput ? (
                <SearchResults>
                    {results &&
                        results.results.map((result) => (
                            <div
                                key={result.id}
                                onClick={() =>
                                    navigate(
                                        `/${result.media_type}/${result.id}`
                                    )
                                }
                            >
                                <img
                                    src={`${config.images.secure_base_url}${config.images.poster_sizes[6]}${result.poster_path}`}
                                    alt={''}
                                />
                                {result.title || result.name}
                            </div>
                        ))}
                </SearchResults>
            ) : (
                ''
            )}
        </InputAndSearch>
    );
}

const InputAndSearch = styled.div`
    position: relative;
    height: 48px;
    z-index: 5;
`;

const SearchIcon = styled(AiOutlineSearch)`
    position: absolute;
    font-size: 24px;
    left: 12px;
    top: 12px;
`;

const Input = styled(DebounceInput)`
    width: 100%;
    height: 48px;
    background-color: ${colors.inputBlack};
    border-radius: ${({ open }) => (open ? '20px 20px 0 0' : '20px')};
    padding: 16px 0 16px 52px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: ${colors.inputGray};
`;

const SearchResults = styled.div`
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
