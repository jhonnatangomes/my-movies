import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import { Home, NavBar, Movie } from './components';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/tvShow/:id" element={<Movie />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
}
