import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, ProductDetail, SearchFeed  } from './components';


const App = () => {
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
};

export default App;