import { Logo } from "../Logo";
import { HeaderContainer } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo />
        <h2>Página Inicial</h2>
      </div>
    </HeaderContainer>
  );
}
