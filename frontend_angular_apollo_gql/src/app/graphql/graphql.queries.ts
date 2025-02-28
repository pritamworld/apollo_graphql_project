import {gql} from 'apollo-angular'

// Query to get all movies
export const GET_MOVIES = gql`
  query {
    movies {
      id
      name
      director_name
      production_house
      release_date
      rating
    }
  }
`;
