import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {
    render() {
        return (
            <ul className="movies">
                {this.props.movies.map((movie) => {                    
                    return (
                        <li className="movies__item" key={movie.imdbID}>
                            <MovieItem {...movie} />
                        </li>)
                }
                )}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps updated Movies");
    return {
        movies: state.movieReducer.movies
    }
}

export default connect(mapStateToProps)(Movies);