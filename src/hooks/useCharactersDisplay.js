import { useQuery, gql } from '@apollo/client';

const GET_ALL_CHAR = gql`
  query GetAllCharacters{
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
/**
* @author
* @function useCharactersDisplay
**/

export const useCharactersDisplay = props => {
  const { error, data, loading } = useQuery(GET_ALL_CHAR);

  return {error, data, loading};
};