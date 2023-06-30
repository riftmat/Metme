import { Route, Routes } from 'react-router-dom';

import AllMetupsPage from './pages/AllMeetups';
import New from './pages/New';
import FavoritesPage from './pages/Favorite';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMetupsPage />} />
        <Route path="/new" element={<New />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
