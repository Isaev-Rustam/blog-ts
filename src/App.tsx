import { Route, Routes } from 'react-router-dom';

import { Articles } from '@/pages/articles';
import { Profile } from '@/pages/profile';
import { Layout } from '@/layout';

import './index.css';

const App = () => {
  const isAuth = false;

  return (
    <Routes>
      <Route element={<Layout isAuth />}>
        <Route index element={<Articles />} />
        <Route path="articles" element={<Articles />} />
        <Route path="*" element={<p>nothing here: 404!</p>} />
      </Route>
      <Route element={<Layout isAuth={isAuth} />}>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<p>nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

export default App;
