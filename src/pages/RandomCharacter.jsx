import {getRandomCharacter} from "../Api"
import { useState } from "react"

function RandomCharacter () {
    const [character, setCharacter] = useState(null);

    const obtainRandomCaracter = async () => {
        setCharacter(await getRandomCharacter())
    }

    return (
        <div>
            <h1>Random Marvel Character</h1>
      {character && (
        <div>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} width="150" />
          <h2>{character.name}</h2>
        </div>
      )}
      <button onClick={obtainRandomCaracter} style={{ marginTop: "10px", padding: "10px" }}>Get Random Character</button>
    </div>
    )
}
export default RandomCharacter; 
