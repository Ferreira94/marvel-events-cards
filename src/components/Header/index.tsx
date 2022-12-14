import { SignOut, UserCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, UserContainer } from "./style";

interface IHeaderProps {
  name?: string;
}

export function Header({ name }: IHeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div>
        <img src="/assets/logo.svg" />
        {name && (
          <UserContainer>
            <UserCircle size={32} />
            <strong>{name}</strong>
            <div>
              <SignOut />
              <span onClick={() => navigate("/")}>Sair</span>
            </div>
          </UserContainer>
        )}
      </div>
    </HeaderContainer>
  );
}
