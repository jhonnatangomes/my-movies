import styled from 'styled-components';
import config from '../../config/tmdbConfig.json';

export default function AvailableStreams({ watchProviders }) {
    return (
        <Container>
            <span>Disponível em</span>
            <Streams>
                {watchProviders &&
                    watchProviders.flatrate.map((stream, i) => (
                        <div key={i}>
                            <img
                                src={`${config.images.secure_base_url}${config.images.logo_sizes[6]}${stream.logo_path}`}
                                alt={''}
                            />
                        </div>
                    ))}
            </Streams>
        </Container>
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
