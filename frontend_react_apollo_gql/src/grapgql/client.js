import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { GET_MOVIES } from "./movie_queries.js";
import { ADD_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from "./movie_mutations.js";

const GQL_SERVER_URL = 'http://localhost:4000/graphql'

// Set up Apollo Client
const client = new ApolloClient({
  uri: GQL_SERVER_URL,  // Your server URL
  cache: new InMemoryCache(),
});


client
  .query({ query: GET_MOVIES })
  .then((result) => console.log(result.data.movies));

// Mutation to add a new movie
/*
client
  .mutate({
    mutation: ADD_MOVIE,
    variables: {
      name: 'Interstellar',
      director_name: 'Christopher Nolan',
      production_house: 'Paramount Pictures',
      release_date: '2014-11-07',
      rating: 8.6,
    },
  })
  .then((result) => console.log(result.data.addMovie));

// Mutation to update a movie
client
  .mutate({
    mutation: UPDATE_MOVIE,
    variables: {
      id: '1',
      name: 'Inception (Updated)',
      director_name: 'Christopher Nolan',
      production_house: 'Warner Bros.',
      release_date: '2010-07-16',
      rating: 9.0,
    },
  })
  .then((result) => console.log(result.data.updateMovie));

// Mutation to delete a movie
client
  .mutate({
    mutation: DELETE_MOVIE,
    variables: { id: '2' },
  })
  .then((result) => console.log(result.data.deleteMovie));

*/