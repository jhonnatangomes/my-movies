import styled from 'styled-components';
import colors from '../../styles/colors';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { FaRandom } from 'react-icons/fa';
import { useLocation } from 'react-router';
import SvgElement from './SvgElement';

export default function NavBar() {
    const path = useLocation();
    return (
        <>
            <SvgElement />
            <NavBarContainer>
                <FaRandom
                    style={{
                        fill:
                            path.pathname === '/random'
                                ? 'url(#orange-gradient)'
                                : '',
                    }}
                />
                <AiFillHome
                    style={{
                        fill:
                            path.pathname === '/'
                                ? 'url(#orange-gradient)'
                                : '',
                    }}
                />
                <AiOutlineUser
                    style={{
                        fill:
                            path.pathname === '/user'
                                ? 'url(#orange-gradient)'
                                : '',
                    }}
                />
            </NavBarContainer>
        </>
    );
}

const NavBarContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${colors.black};
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
    color: ${colors.iconBlack};
`;