import styled from 'styled-components';
import { AiOutlineClockCircle, AiFillStar } from 'react-icons/ai';
import colors from '../../styles/colors';

export default function RunTimeAndScore({ details }) {
    return (
        <Container>
            <div>
                <AiOutlineClockCircle />
                <span>
                    {details?.runtime || details?.episode_run_time} minutos
                </span>
            </div>
            <div>
                <AiFillStar />
                <span>{details?.vote_average} (TMDb)</span>
            </div>
        </Container>
    );
}

const Container = styled.div`
    font-size: 12px;
    line-height: 14.5px;
    display: flex;
    margin-bottom: 15px;

    div {
        display: flex;
        align-items: center;

        span {
            font-size: 12px;
            margin-left: 6px;
            margin-right: 18px;
            color: ${colors.runTimeGray};
        }
    }
`;
