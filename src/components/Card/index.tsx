import { CardContainer } from "./style";

export interface ICardProps {
  title: string;
  description: string;
  thumbnail: string;
  points: number;
}

export function Card({ title, description, thumbnail, points }: ICardProps) {
  return (
    <CardContainer>
      <div>
        <span>{points}</span>
      </div>
      <img src={thumbnail} />
      <strong>{title}</strong>
      <p>{description}</p>
    </CardContainer>
  );
}
