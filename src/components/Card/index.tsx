import { CardContainer } from "./style";

export interface ICardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  points: number;
}

export function Card({
  id,
  title,
  description,
  thumbnail,
  points,
}: ICardProps) {
  return (
    <CardContainer key={id}>
      <div>
        <span>{points}</span>
      </div>
      <img src={thumbnail} />
      <strong>{title}</strong>
      <p>{description}</p>
    </CardContainer>
  );
}
