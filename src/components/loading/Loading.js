import styled from 'styled-components';
import { Orbitals } from 'react-spinners-css';
import colors from '../../styles/colors';

export default function Loading() {
    return (
        <LoaderContainer>
            <Orbitals color={colors.loadingOrange} />
        </LoaderContainer>
    );
}

const LoaderContainer = styled.div`
    position: fixed;
    left: calc(50vw - 40px);
    top: calc(50vh - 40px);
`;
