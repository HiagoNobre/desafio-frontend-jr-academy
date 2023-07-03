import { Route, Routes } from 'react-router-dom';
import Multiselect from './pages/Multiselect/index.tsx';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Multiselect />} />
    </Routes>
  )
}
