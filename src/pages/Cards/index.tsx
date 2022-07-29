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
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<IResultProps[]>([]);
  const [countCards, setCountCards] = useState(0);
  const isLoading = events.length === 0 ? true : false;
  const { state } = useLocation() as unknown as IUserProps;
  const navigate = useNavigate();

  if (!state.name) {
    navigate("/");
  }

  useEffect(() => {
    api
      .get(`/events?ts=${timestamp}&apikey=${public_key}&hash=${hash}&limit=74`)
      .then((response) => setEvents(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  function sortNumbers() {
    setRandomNumbers([...randomNumbers, Math.floor(Math.random() * 74)]);

    setCountCards(countCards + 1);
  }

  useEffect(() => {
    if (countCards < 5) {
      sortNumbers();

      return;
    }

    if (!isLoading) {
      console.log(randomNumbers);
      {
        randomNumbers.map((item) =>
          setSelectedEvents((state) => [...state, events[item]])
        );
      }
    }

    return;
  }, [isLoading, countCards]);

  return (
    <CardsContainer>
      {!isLoading ? (
        <>
          {selectedEvents.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail.path + `.` + item.thumbnail.extension}
              points={Math.floor(Math.random() * 11)}
            />
          ))}
        </>
      ) : (
        <h2>Carregando...</h2>
      )}
    </CardsContainer>
  );
}
