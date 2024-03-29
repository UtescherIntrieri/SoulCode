import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { NovoCliente } from "./pages/NovoCliente/NovoCliente";
import { Clientes } from "./pages/Clientes/Clientes";
import { EditarCliente } from "./pages/EditarCliente/EditarCliente";


function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}/>
      <Route path="/clientes" element={<Clientes />}/>
      <Route path="/clientes/novo" element={<NovoCliente />}/>
      <Route path="/clientes/editar/:id" element={<EditarCliente />}/>
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
