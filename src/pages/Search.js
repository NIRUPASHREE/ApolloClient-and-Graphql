import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocation($name: string!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
          dimension
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState('');
  
  // first elemnt is a function that we can call to excute this query, sec is a obj
  const [getLocation, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name
      }
    }
  );

  console.log(called, loading, error, data);
  return (
    <div>
      <h1>Search a name for his/her locations</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => getLocation()}>search</button>
    </div>
  );
}
