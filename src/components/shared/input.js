import styled from 'styled-components';
import colors from '../../styles/colors';

const Input = styled.input`
    width: 100%;
    height: 48px;
    background-color: ${colors.inputBlack};
    border-radius: 20px;
    padding: 16px 0 16px 52px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: ${colors.inputGray};
`;

export default Input;
