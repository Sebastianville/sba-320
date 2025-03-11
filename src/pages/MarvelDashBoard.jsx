//https://github.com/bitmakerlabs/react-marvel-api/blob/master/README.md#overview
import { useEffect, useState } from "react";
import { getCharacters } from "../Api";

function MarvelDashboard() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Loading characters...</p>;


  return (
    <div>
      <h1>Marvel Dashboard</h1>
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );

}

export default MarvelDashboard