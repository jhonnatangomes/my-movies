import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import { Home } from './components';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
