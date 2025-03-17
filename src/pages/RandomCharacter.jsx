import {getRandomCharacter} from "../Api.jsx"
import { useState } from "react"
import "./RandomCharacter.css";

function RandomCharacter () {
    const [character, setCharacter] = useState(null);

    const obtainRandomCaracter = async () => {
        setCharacter(await getRandomCharacter())
    }

    return (
      <div className="random-container">
        <h1>Random Marvel Character</h1>
  
        {character && (
          <div className="card">
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <div className="card-content">
              <h2>{character.name}</h2>
            </div>
          </div>
        )}
  
        <button className="random-btn" onClick={obtainRandomCaracter}>
          Get Random Character
        </button>
      </div>
    );
}
export default RandomCharacter; 
