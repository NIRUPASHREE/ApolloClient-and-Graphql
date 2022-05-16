import { useQuery, gql } from '@apollo/client';

const GET_CHAR = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      gender
      image
      
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, data, loading } = useQuery(GET_CHAR, {
      variables:{
          id
      }
  });

  return { error, data, loading };
}
