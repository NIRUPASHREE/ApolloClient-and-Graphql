import React from 'react';
import './Character.css';
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router';

export default function Character() {
  const { id } = useParams();

  const { data, error, loading } = useCharacter(id);
  if (loading) return <div>...loading....</div>;
  if (error) return <div>...error....</div>;

  return (
    <div className='Character'>
      <div>
        <img src={data.character.image} alt='gv' />
      </div>
      <div className='CharacterContent'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
      </div>
      <div className='CharacterEpisode'>
        {data.character.episode.map(episode => {
          return (
            <div>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}
