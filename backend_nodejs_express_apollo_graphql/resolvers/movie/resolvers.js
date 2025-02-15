const Movie = require('../../models/Movie');

const resolver = {
    Query: {
        movies: async (parent, args, contextValue, info) => {
            return await Movie.find({})
        },
        movie: async (_, { id }) => {
            return await Movie.findById(id)
        },
        movieByName: async (_, { name }) => {
            return await Movie.findOne({name})
        }
    },
    Mutation: {
        addMovie: async (parent, args, contextValue, info) => {
            const movie = new Movie({
                name: args.name,
                director_name: args.director_name,
                production_house: args.production_house,
                release_date: args.release_date,
                rating: args.rating
            })

            const newMovie = await movie.save()
            return newMovie
        },
        updateMovie: async (parent, { id, name, director_name, production_house, release_date, rating }, contextValue, info) => {
            const movie = await Movie.findById(id)
            if(!movie) return null

            if (name) movie.name = name;
            if (director_name) movie.director_name = director_name;
            if (production_house) movie.production_house = production_house;
            if (release_date) movie.release_date = release_date;
            if (rating) movie.rating = rating;

            const updatedMovie = await movie.save()
            return updatedMovie
        },
        deleteMovie: async (parent, { id }, contextValue, info) => {
            const movie = await Movie.findById(id)
            if(!movie) return null

            await movie.remove()
            return movie
        }
    }
}

module.exports = resolver