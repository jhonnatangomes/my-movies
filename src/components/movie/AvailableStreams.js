import styled from 'styled-components';
import createImageUrl from '../../helpers/createImageUrl';
import colors from '../../styles/colors';

export default function AvailableStreams({ watchProviders }) {
    return (
        <>
            <Container>
                <span>
                    {watchProviders &&
                    watchProviders.flatrate &&
                    watchProviders.flatrate.length
                        ? 'Disponível em'
                        : ''}
                </span>
                <Streams>
                    {watchProviders &&
                        watchProviders.flatrate &&
                        watchProviders.flatrate.map((stream, i) => (
                            <div key={i}>
                                <img
                                    src={createImageUrl(stream.logo_path)}
                                    alt={''}
                                />
                            </div>
                        ))}
                </Streams>
            </Container>
            {watchProviders &&
            watchProviders.flatrate &&
            watchProviders.flatrate.length ? (
                <DivisionLine />
            ) : (
                ''
            )}
        </>
    );
}

const Container = styled.div`
    margin: 16px 0 4px 0;
`;

const Streams = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;

    div {
        margin-right: 12px;
        margin-bottom: 10px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }
    }
`;

const DivisionLine = styled.div`
    width: 100%;
    height: 0px;
    border: 0.2px solid ${colors.divisionGrey};
`;
