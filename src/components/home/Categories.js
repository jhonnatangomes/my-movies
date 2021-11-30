import styled from 'styled-components';
import { useState } from 'react';
import colors from '../../styles/colors';

export default function Categories({ setCategory }) {
    const [selected, setSelected] = useState([true, false, false, false]);

    function handleClick(i) {
        const newSelected = [false, false, false, false];
        newSelected[i] = true;
        setSelected(newSelected);
        switch (i) {
            case 0:
                setCategory('movies');
                break;
            case 1:
                setCategory('tvShows');
                break;
            case 2:
                setCategory('documentaries');
                break;
            case 3:
                setCategory('sports');
                break;
            default:
                break;
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
            <Category selected={selected[2]}>
                <span onClick={() => handleClick(2)} selected={selected[2]}>
                    Documentários
                </span>
                <SelectedUnderline selected={selected[2]} />
            </Category>
            <Category selected={selected[3]}>
                <span onClick={() => handleClick(3)} selected={selected[3]}>
                    Esportes
                </span>
                <SelectedUnderline selected={selected[3]} />
            </Category>
        </CategoriesContainer>
    );
}

const CategoriesContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
