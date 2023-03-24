import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Home } from './pages/Home/Home';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { Section, Section4 } from './components/Section/Section';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';
import { Perfil } from './pages/Perfil/Perfil';
import { Pokemon } from './pages/Pokemon/Pokemon';
import { SuperHeroi } from './pages/SuperHeroi/SuperHeroi';
import { Produtos } from './pages/Produtos/Produtos';

const sections = [
  {
    title: 'Section 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Section 2',
    description: 'Reprehenderit reiciendis ipsa, doloremque consequuntur expedita labore?'
  },
  {
    title: 'Section 3',
    description: 'Accusamus deleniti quidem deserunt earum libero eveniet porro quas, quibusdam, aliquam saepe maxime a ad?'
  },
]

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='/' element={<Home />}>
              <Route path='/section1' element={<Section title={sections[0].title} description={sections[0].description} />} />
              <Route path='/section2' element={<Section title={sections[1].title} description={sections[1].description} />} />
              <Route path='/section3' element={<Section title={sections[2].title} description={sections[2].description} />} />
              <Route path='/section4' element={<Section4 />} />
            </Route>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/contato' element={<Contato />}/>
            <Route path='/usuarios' element={<Usuarios />}/>
            <Route path='/usuario/edit/:id' element={<EditaUsuario />}/>
            <Route path='/usuario/perfil/:id' element={<Perfil />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/produtos' element={<Produtos />}/>
            
            <Route path='/pokemon' element={<Pokemon />}/>
            <Route path='/superheroi' element={<SuperHeroi />}/>
            
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
