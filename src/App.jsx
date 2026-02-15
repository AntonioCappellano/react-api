import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [actors, setActors] = useState([]);

  function fetchActor() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((res) => {
      const actorList = res.data;
      console.log(actorList);
      setActors(actorList);
    });
  }

  useEffect(fetchActor, []);

  return (
    <>
      <div className="container">
        <h1>Attori</h1>
        <div className="row g-3">
          {actors.map((actor) => (
            <div key={actor.id} className="col-3">
              <div className="card h-100">
                <img
                  src={actor.image}
                  className="card-img-top"
                  alt={actor.name}
                ></img>
                <div className="card-body">
                  <h4>{actor.name}</h4>
                  <p>{actor.birth_year}</p>
                  <p>{actor.nationality}</p>
                  <p>{actor.biography}</p>
                  <p>{actor.awards}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
