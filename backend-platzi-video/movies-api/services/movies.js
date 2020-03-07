const MongoLib = require('../lib/mongo');

class MoviesService {
	constructor() {
		this.colletion = 'movies';
		this.mongoDB = new MongoLib();
	}

	async getMovies({ tags }) {
		const query = tags && { tags: { $in: tags }};
		const movies = await this.mongoDB.getAll(this.colletion, query);
		return movies || [];
	}

	async getMovie({ movieId }) {
		const movie = await this.mongoDB.get(this.colletion, movieId);
		return movie || [];
	}

	async createMovie({ movie }) {
		const createdMovieId = await this.mongoDB.create(this.colletion, movie)
		return createdMovieId;
	}

	async updateMovie({ movieId, movie }) {
		const updatedMovieId = await this.mongoDB.update(this.colletion, movieId, movie);
		return updatedMovieId;
	}

	async deleteMovie({ movieId }) {
		const deletedMovieId = await this.mongoDB.delete(this.colletion, movieId);
		return deletedMovieId || [];
	}
}

module.exports = MoviesService;