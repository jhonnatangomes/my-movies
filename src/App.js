import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import { Home, NavBar, Movie } from './components';
import { useState } from 'react';
import Random from './components/random/Random';
import LastMovieContext from './contexts/lastMovieContext';
import CategoryContext from './contexts/categoryContext';

export default function App() {
    const [category, setCategory] = useState('movie');
    const [lastMovieClicked, setLastMovieClicked] = useState(-1);
    const [lastTvShowClicked, setLastTvShowClicked] = useState(-1);

    return (
        <BrowserRouter>
            <LastMovieContext.Provider
                value={{
                    lastMovieClicked,
                    lastTvShowClicked,
                    setLastMovieClicked,
                    setLastTvShowClicked,
                }}
            >
                <CategoryContext.Provider value={{ category, setCategory }}>
                    <GlobalStyle />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    category={category}
                                    setCategory={setCategory}
                                />
                            }
                        />
                        <Route path="/movie/:id" element={<Movie />} />
                        <Route path="/tv/:id" element={<Movie />} />
                        <Route path="/random" element={<Random />} />
                    </Routes>
                    <NavBar />
                </CategoryContext.Provider>
            </LastMovieContext.Provider>
        </BrowserRouter>
    );
}
