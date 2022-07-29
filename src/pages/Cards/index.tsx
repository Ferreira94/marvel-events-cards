import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../components";

import { api, hash, public_key, timestamp } from "../../services/api";
import { IConfirmFormData } from "../Home";
import { CardsContainer } from "./style";

interface IUserProps {
  state: IConfirmFormData;
}

export interface IResultProps {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export function Cards() {
  const [events, setEvents] = useState<IResultProps[]>([]);
  const isLoading = events.length === 0 ? true : false;
  const { state } = useLocation() as unknown as IUserProps;
  const navigate = useNavigate();

  console.log(state.name);

  if (!state.name) {
    navigate("/");
  }

  useEffect(() => {
    api
      .get(`/events?ts=${timestamp}&apikey=${public_key}&hash=${hash}`)
      .then((response) => setEvents(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(events.length);

  return (
    <CardsContainer>
      {!isLoading ? (
        <>
          {events.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail.path + `.` + item.thumbnail.extension}
              points={9}
            />
          ))}
        </>
      ) : (
        <h2>Carregando...</h2>
      )}
    </CardsContainer>
  );
}
