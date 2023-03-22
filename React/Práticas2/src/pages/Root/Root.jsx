import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";

export function Root() {
  return (
    <div className="root">
      <Menu />
      <Container>
        <Outlet/>
      </Container>
    </div>
  )
}