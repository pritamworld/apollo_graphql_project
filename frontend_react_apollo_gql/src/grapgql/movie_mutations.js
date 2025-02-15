import { gql } from '@apollo/client';

// Mutation to add a new movie
export const ADD_MOVIE = gql`
  mutation addMovie($name: String!, $director_name: String!, $production_house: String!, $release_date: String!, $rating: Float!) {
    addMovie(name: $name, director_name: $director_name, production_house: $production_house, release_date: $release_date, rating: $rating) {
      id
      name
      director_name
      production_house
      release_date
      rating
    }
  }
`;

// Mutation to update a movie
export const UPDATE_MOVIE = gql`
  mutation updateMovie($id: ID!, $name: String, $director_name: String, $production_house: String, $release_date: String, $rating: Float) {
    updateMovie(id: $id, name: $name, director_name: $director_name, production_house: $production_house, release_date: $release_date, rating: $rating) {
      id
      name
      director_name
      production_house
      release_date
      rating
    }
  }
`;

// Mutation to delete a movie
export const DELETE_MOVIE = gql`
  mutation deleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
      name
      director_name
      production_house
      release_date
      rating
    }
  }
`;
