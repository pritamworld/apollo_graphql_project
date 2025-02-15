import { GET_MOVIES } from "./grapgql/movie_queries.js";
import { ADD_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from "./grapgql/movie_mutations.js";
import { useState } from 'react'
import { useQuery } from "@apollo/client"
import './App.css';

// client
//   .query({ query: GET_MOVIES })
//   .then((result) => console.log(result.data.movies))
  

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

function App() {
  const { loading, error, data } = useQuery(GET_MOVIES)
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data)

  return (
    <div>
      <h1>Apollo GraphQL Client</h1>

    </div>  
  );
}

export default App;
