import React, { useEffect, useState } from "react";
import axios from "axios";

function Joke() {
  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    let source = axios.CancelToken.source();

    const search = async () => {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/random",
          { cancelToken: source.token }
        );
        setRandomJoke(response.data.value);
      } catch (e) {}
    };
    search();

    return () => {
      source.cancel("Landing Component got unmounted");
    };
  }, []);

  return <>{randomJoke}</>;
}

export default Joke;
