import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Medios from './pages/admin/Medios';
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='medios' element={<Medios/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
