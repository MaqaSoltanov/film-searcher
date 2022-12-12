import React, { Component } from 'react';
import { connect } from 'react-redux';
import deleteFromFavoritesAction from '../../redux/actions/deleteFromFavoritesAction';
import changeButtonContentAction from '../../redux/actions/changeButtonContent.Action';
import './Favorites.css';

class Favorites extends Component {

    render() {
        return (
            <div className="favorites">
                <input className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favMovies.map((item) => {
                        return (
                            <li key={item.imdbID}>{item.Title} ({item.Year})
                                <button className='delete-button' 
                                        onClick={() => this.props.deleteMovie(item.imdbID)}>
                                    x
                                </button>
                            </li>
                        )
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps updated Favorites");
    return { favMovies: state.favoriteReducer.favoriteMovies }
}

const mapDispatchToProps = (dispatch) => ({
    deleteMovie: (id) => {
        console.log("Dispatched DELETE_FROM_FAVORITES action")
        dispatch(deleteFromFavoritesAction(id));
        console.log("Dispatched CHANGE_BUTTON_CONTENT action");
        dispatch(changeButtonContentAction(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);