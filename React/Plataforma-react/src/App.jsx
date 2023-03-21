import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Home } from './pages/Home/Home';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Container } from 'react-bootstrap';
import { Login } from './pages/Login/Login';

export function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
      <Container>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/usuarios' element={<Usuarios />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
