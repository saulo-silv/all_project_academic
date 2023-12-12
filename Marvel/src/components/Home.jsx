import React from "react";
import { useState } from "react";
import Container from "./Container";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Card from "./Card";
import { fetchHeros } from "../utils/utils";

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;

    try {
      const data = await fetchHeros(args);
      setHeroes(data);
    } catch (err) {
      return err;
    }
  };

  return (
    <Container>
      <div className="title">
        <h1>Marvelous Universe</h1>
      </div>
      <SearchBar
        handleClick={handleClick}
        setHeroes={setHeroes}
        setError={setError}
      />

      <Grid>
        {heroes.map((hero) => (
          <Card
            name={hero.name}
            key={hero.id}
            id={hero.id}
            thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
          />
        ))}
      </Grid>
    </Container>
  );
}
