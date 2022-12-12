import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';
import updateFavoritesAction from '../../redux/actions/updateFavoritesAction';
import changeButtonContentAction from '../../redux/actions/changeButtonContent.Action';

class MovieItem extends Component {
    render() {
        const { Title, Year, Poster, imdbID, isAdded } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}({Year})</h3>
                    <button type="button" className="movie-item__add-button"
                        disabled={isAdded}
                        onClick={() => this.props.updateFavorites({ Title, Year, Poster, imdbID })}>
                        {isAdded ? "Добавлено" : "Добавить в список"}
                    </button>
                </div>
            </article>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateFavorites: (movie) => {
        console.log("Dispatched UPDATE_FAVORITES action");
        dispatch(updateFavoritesAction(movie));
        console.log("Dispatched CHANGE_BUTTON_CONTENT action");
        dispatch(changeButtonContentAction(movie.imdbID))
    },
})

export default connect(null, mapDispatchToProps)(MovieItem);