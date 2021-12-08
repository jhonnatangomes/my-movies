import config from '../config/tmdbConfig.json';

export default function createImageUrl(path) {
    return `${config.images.secure_base_url}/original${path}`;
}
