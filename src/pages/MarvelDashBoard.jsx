//https://github.com/bitmakerlabs/react-marvel-api/blob/master/README.md#overview
import { useEffect, useState } from "react";
import { getCharacters } from "../Api.jsx";
import './MarvelDashboard.css'
import Spinner from "react-bootstrap/Spinner";

function MarvelDashboard() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      //I want to filter out the images that do not have an image 
      const filteredCharacter = data.filter(character => !character.thumbnail.path.includes("image_not_available"))
      setCharacters(filteredCharacter);
      setLoading(false);
    };

    fetchCharacters();
  }, []);

  if (loading)
    return (
      <div className="loading-container">
        <p>Loading characters...</p>
        <Spinner animation="border" variant="light" />
      </div>
    );

  return (
    <div>
      <h1>Marvel Characters Dashboard</h1>
      {/* <h2>Characters</h2> */}

      <div className="cards">
        {characters.map((character) => (
          <div className="card" key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <div className="card-content">
              <h3>{character.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default MarvelDashboard