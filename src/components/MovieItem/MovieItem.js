import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';
import updateFavoritesAction from '../../redux/actions/updateFavoritesAction';

class MovieItem extends Component {

    state = {
        currentButtonContent: "Добавить в список"
    }

    //Calling this to check all movies on updated query
    componentDidMount(){
        this.checkMovie();
    }

    // Change text of movieItem
    handleClick = (movieToAdd) => {
        console.log("Handling add click");

        if (this.state.currentButtonContent === "Добавлено")
            return;

        this.setState({ currentButtonContent: "Добавлено" })
        this.props.updateFavorites(movieToAdd)

    }

    //Check new movies on render
    checkMovie = () => {
        this.props.favMovies.forEach((favMovie) => {
            if (this.props.imdbID === favMovie.imdbID)
                this.setState({ currentButtonContent: "Добавлено" })
        })
    }

    render() {
        const { Title, Year, Poster, imdbID } = this.props;
            return (
                <article className="movie-item">
                    <img className="movie-item__poster" src={Poster} alt={Title} />
                    <div className="movie-item__info">
                        <h3 className="movie-item__title">{Title}({Year})</h3>
                        <button type="button" className="movie-item__add-button" onClick={() => this.handleClick({ Title, Year, Poster, imdbID })}>{this.state.currentButtonContent}</button>
                    </div>
                </article>
            );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps MovieItem got information about favMovies");
    return {
        favMovies: state.favoriteReducer.favoriteMovies
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateFavorites: (movie) => {
        console.log("Dispatched UPDATE_FAVORITES action")
        dispatch(updateFavoritesAction(movie));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);