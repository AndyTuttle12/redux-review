import React, { Component } from 'react';
import {connect} from 'react-redux';
import FetchWeather from '../actions/FetchWeather';
import FetchMovie from '../actions/FetchMovie';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state={
			zipCode: '',
			movieSearch: ''
		}
		this.changeZipCode = this.changeZipCode.bind(this);
		this.getWeather = this.getWeather.bind(this);
		this.getMovie = this.getMovie.bind(this);
		this.changeMovie = this.changeMovie.bind(this);
	}

	getWeather(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.zipCode);
	}

	changeZipCode(event){
		this.setState({
			zipCode: event.target.value
		})
	}

	getMovie(event){
		event.preventDefault();
		this.props.FetchMovie(this.state.movieSearch);
	}

	changeMovie(event){
		this.setState({
			movieSearch: event.target.value
		})
	}

	render(){
		console.log(this.props)
		if(this.props.movieData === null){
			var movieData = '';
		}else{
			movieData = this.props.movieData;
		}

		if(this.props.weatherData === null){
			var weatherData = "";
		}else{
			weatherData = this.props.weatherData.name;
		}
		
		return(
			<div>
				<form onSubmit={this.getWeather}>
					<input  className="weather-input" placeholder="Enter Zip Code" value={this.state.zipCode} onChange={this.changeZipCode}/>
					<button type="submit" className="btn btn-primary">Get Weather</button>
				</form>
				{weatherData}
				<form onSubmit={this.getMovie}>
					<input  className="movie-input" placeholder="Search for movies." value={this.state.movieSearch} onChange={this.changeMovie}/>
					<button type="submit" className="btn btn-primary">Get Movies</button>
				</form>
				{movieData}
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		weatherData: state.weather,
		movieData: state.movie
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchWeather: FetchWeather,
		FetchMovie: FetchMovie
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);