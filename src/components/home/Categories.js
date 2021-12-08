import styled from 'styled-components';
import { useState } from 'react';
import colors from '../../styles/colors';
import { useEffect } from 'react/cjs/react.development';

export default function Categories({ category, setCategory }) {
    const [selected, setSelected] = useState([false, false]);

    useEffect(() => {
        if (category === 'movie') {
            setSelected([true, false]);
        } else {
            setSelected([false, true]);
        }
    }, []);

    function handleClick(i) {
        const newSelected = [false, false];
        newSelected[i] = true;
        setSelected(newSelected);
        if (i === 0) {
            setCategory('movie');
        } else {
            setCategory('tv');
        }
    }

    return (
        <CategoriesContainer>
            <Category selected={selected[0]}>
                <span onClick={() => handleClick(0)}>Filmes</span>
                <SelectedUnderline selected={selected[0]} />
            </Category>
            <Category selected={selected[1]}>
                <span onClick={() => handleClick(1)} selected={selected[1]}>
                    Séries
                </span>
                <SelectedUnderline selected={selected[1]} />
            </Category>
        </CategoriesContainer>
    );
}

const CategoriesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 24px;
`;

const Category = styled.div`
    span {
        background: ${({ selected }) =>
            selected ? colors.gradientSelected : 'white'};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: background 0.5s ease;
    }
`;

const SelectedUnderline = styled.div`
    width: 19px;
    height: 2px;
    background: ${colors.gradientSelected};
    margin-top: 8px;
    visibility: ${({ selected }) => (selected ? 'visible' : 'hidden')};
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    transition: all 0.7s ease;
`;
