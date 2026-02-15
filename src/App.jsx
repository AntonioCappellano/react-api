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

  return <></>;
}
