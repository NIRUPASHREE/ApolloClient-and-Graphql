import React from 'react';
import './CharacterList.css';
import { useCharactersDisplay } from '../hooks/useCharactersDisplay';
import { Link } from 'react-router-dom';



export default function CharacterList() {
  const { error, data, loading } = useCharactersDisplay();
  
  if (loading) return <div>...loading....</div>
  if( error) return <div>.....errroorrrrrr</div>

  return <div className='CharacterList'>
    {data.characters.results.map(character => {
      return (
        <Link to={`/${character.id}`}>
          <br />
          <img src={character.image} alt='sdsds' />
          <div>{character.name}</div>
          <br />
        </Link>
      );
    } )}
  </div>;
}
