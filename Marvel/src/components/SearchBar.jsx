import React, { useRef } from "react";
//import { fetchHeroes } from "../utils/utils";
import Button from "./Button";

export default function SearchBar({ handleClick, setHeroes, setError }) {
  let input = useRef();
  return (
    <form>
      <input type="text" placeholder="Pesquisar Hero" ref={input} />
      <Button
        text={"🔍"}
        handleClick={(e) => {
          handleClick(e, input.current.value)
            .then((data) => setHeroes(data.data.results))
            .catch((err) => setError(err));
        }}
      />
    </form>
  );
}
