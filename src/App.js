import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import { Home, NavBar, Movie } from './components';
import { useState } from 'react';
import Random from './components/random/Random';

export default function App() {
    const [category, setCategory] = useState('movie');

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home category={category} setCategory={setCategory} />
                    }
                />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/tv/:id" element={<Movie />} />
                <Route path="/random" element={<Random />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
}
