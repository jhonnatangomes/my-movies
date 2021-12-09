import styled from 'styled-components';
import { Orbitals } from 'react-spinners-css';

export default function Loading() {
    return (
        <LoaderContainer>
            <Orbitals color="#f75f46" />
        </LoaderContainer>
    );
}

const LoaderContainer = styled.div`
    position: fixed;
    left: calc(50vw - 40px);
    top: calc(50vh - 40px);
`;
