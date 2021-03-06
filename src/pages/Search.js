import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState('');
  
  const [getLocation, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name
      }
    }
  );

  return (
    <div>
      <h1>Search a name for his/her locations</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => getLocation()}>search</button>

      {loading && <div>....spinnerr....</div>}
      {error && <div>....error....</div>}

      {data && <ul>
         {data.characters.results.map((Character) => {
           return <li>{Character.location.name}</li>
         })}
         </ul>}
    </div>
  );
}
