import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHero } from "../utils/utils";

export default function HeroDetails() {
  let { id } = useParams();

  const [hero, setHero] = useState([
    {
      name: "",
      description: "",
      thumbnail: {},
      series: "",
    },
  ]);

  useEffect(() => {
    fetchHero(id)
      .then((data) => {
        setHero(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container large">
      <div className="hero__details-container">
        {hero[0].thumbnail ? (
          <img
            src={`${hero[0].thumbnail.path}.${hero[0].thumbnail.extension}`}
            alt="hero image full size"
          />
        ) : null}
        <div className="hero__details">
          <h4>Name</h4>
          <p>{hero[0].name}</p>
          {hero[0].description ? (
            <>
              <h4>Description</h4>
              <p>{hero[0].description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4>Series</h4>
            <ul>
              {hero[0].series
                ? hero[0].series.items.map((item) => (
                    <li key={Math.random() * 1000}>{item.name}</li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
