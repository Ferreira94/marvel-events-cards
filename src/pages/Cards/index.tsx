import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Header } from "../../components";

import { api, hash, public_key, timestamp } from "../../services/api";
import { IConfirmFormData } from "../Home";
import { Container, CardsContainer, ButtonsContainer } from "./style";

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
  stories: {
    available: number;
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
    async function loadApi() {
      await api
        .get(
          `/events?ts=${timestamp}&apikey=${public_key}&hash=${hash}&limit=74`
        )
        .then((response) => setEvents(response.data.data.results))
        .catch((err) => console.log(err));
    }

    loadApi();
  }, []);

  function sortNumbers() {
    for (let i = randomNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomNumbers[i], randomNumbers[j]] = [
        randomNumbers[j],
        randomNumbers[i],
      ];
    }

    setSelectedEvents([]);
    randomNumbers.map((item) =>
      setSelectedEvents((state) => [...state, events[item]])
    );
  }

  function randomNumber() {
    setRandomNumbers([...randomNumbers, Math.floor(Math.random() * 74)]);

    if (countCards >= 5) {
      const random = Math.floor(Math.random() * 74);

      setSelectedEvents((state) => [...state, events[random]]);
    }

    setCountCards(countCards + 1);
  }

  useEffect(() => {
    if (countCards < 5) {
      randomNumber();

      return;
    }

    if (!isLoading && countCards <= 5) {
      randomNumbers.map((item) =>
        setSelectedEvents((state) => [...state, events[item]])
      );
    }

    return;
  }, [isLoading, countCards]);

  return (
    <>
      <Header name={state.name} />
      <Container>
        {!isLoading && (
          <ButtonsContainer>
            <button
              onClick={countCards < 8 ? randomNumber : () => {}}
              disabled={countCards === 8 ? true : false}
            >
              Puxar carta
            </button>
            <button onClick={sortNumbers}>Embaralhar</button>
          </ButtonsContainer>
        )}
        <CardsContainer>
          {!isLoading ? (
            <>
              {selectedEvents.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  thumbnail={
                    item.thumbnail.path + `.` + item.thumbnail.extension
                  }
                  points={
                    Math.floor(item.stories.available / 10) < 10
                      ? Math.floor(item.stories.available / 10)
                      : 10
                  }
                />
              ))}
            </>
          ) : (
            <h2>Carregando...</h2>
          )}
        </CardsContainer>
      </Container>
    </>
  );
}
