import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

import { searchMulti } from '../../services/tmdbApi';
import SearchResults from './SearchResults';
import colors from '../../styles/colors';

export default function SearchBar() {
    const [openInput, setOpenInput] = useState(false);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(null);

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
            {openInput ? <SearchResults results={results} /> : ''}
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
