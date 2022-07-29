import { CardContainer } from "./style";
import { useState } from "react";

export interface ICardProps {
  title: string;
  description: string;
  thumbnail: string;
  points: number;
}

export function Card({ title, description, thumbnail, points }: ICardProps) {
  const [isCardView, setIsCardView] = useState(false);

  return (
    <CardContainer>
      <div>
        <span>{points}</span>
        <strong>{title}</strong>
      </div>
      {isCardView ? <p>{description}</p> : <img src={thumbnail} />}
      <button onClick={() => setIsCardView(!isCardView)}>
        {isCardView ? "Imagem" : "Descrição"}
      </button>
    </CardContainer>
  );
}
