import $ from 'jquery';

const APIKEY = 'fec8b5ab27b292a68294261bb21b04a5';
const movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key='+APIKEY+'&query=';

export default function GetTheMovies(movieSearchString){
	console.log("action", movieSearchString)
	const fullMovieUrl = movieUrl + movieSearchString;

	const thePromise = $.getJSON(fullMovieUrl);
	console.log(thePromise)
	return{
		type: 'getMovies',
		payload: thePromise
	}
}