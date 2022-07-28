import { useEffect } from "react";
import { api, hash, public_key, timestamp } from "../../services/api";

export function Cards() {
  useEffect(() => {
    api
      .get(`/events?ts=${timestamp}&apikey=${public_key}&hash=${hash}`)
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}
