import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CityPage from './components/CityPage';
import BinsPage from './components/BinsPage';
import BinDetailPage from './components/BinDetailPage'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/city" element={<CityPage />} />
                <Route path="/bins/:cityName" element={<BinsPage />} />
                <Route path="/bins/:cityName/:binIndex" element={<BinDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
