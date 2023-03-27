import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";

// Layout principal do App com Navbar Fixa
// As páginas com Navbar fixa: home, livros, empréstimos, etc
export function Root() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
