import { Route, Routes } from 'react-router';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { History } from './pages/History';


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />}/>
      </Route>
    </Routes>
  );
}
