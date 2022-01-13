import styled from 'styled-components';
import colors from '../../styles/colors';

const Button = styled.button`
    width: 250px;
    height: 60px;
    border: 0;
    border-radius: 5px;
    background-image: ${colors.gradientSelected};
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
`;

export default Button;
