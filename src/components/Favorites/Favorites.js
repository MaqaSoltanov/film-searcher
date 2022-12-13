import React, { Component } from 'react';
import { connect } from 'react-redux';
import deleteFromFavoritesAction from '../../redux/actions/deleteFromFavoritesAction';
import changeButtonContentAction from '../../redux/actions/changeButtonContent.Action';
import updateTitleAction from '../../redux/actions/updateTitleAction';
import './Favorites.css';
import { Link } from 'react-router-dom';

class Favorites extends Component {
    state = {
        isActive: false,
        isPressed: false
    }

    handleChange = (e, favMovies) => {
        if (e.target.value.length !== 0 && favMovies.length !== 0) this.setState({ isActive: true });
        else this.setState({ isActive: false });
        this.props.updateTitle(e.target.value);
    }

    handleSaveClick = (e) => {
        e.preventDefault();
        this.setState({ isPressed: true });
    }

    render() {
        return (
            <div className="favorites">
                <input className="favorites__name" onChange={(e) => this.handleChange(e, this.props.favMovies)} readOnly={this.state.isPressed} />
                <ul className="favorites__list">
                    {this.props.favMovies.map((item) => {
                        return (
                            <li className="favorite-list-li" key={item.imdbID}>
                                <button className='delete-button'
                                    onClick={() => this.props.deleteMovie(item.imdbID)}>
                                    x
                                </button>
                                <p>{item.Title} ({item.Year})</p>
                            </li>
                        )
                    })}
                </ul>
                {
                    this.state.isPressed
                        ?
                        <Link to="/list/:id">Перейти к списку</Link>
                        :
                        <button type="submit"
                            className="favorites__save"
                            disabled={!(this.state.isActive)} onClick={(e) => this.handleSaveClick(e)}>
                            Сохранить список
                        </button>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps updated Favorites");
    return {
        favMovies: state.favoriteReducer.favoriteMovies,
        listTitle: state.favoriteReducer.title
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteMovie: (id) => {
        console.log("Dispatched DELETE_FROM_FAVORITES action")
        dispatch(deleteFromFavoritesAction(id));
        console.log("Dispatched CHANGE_BUTTON_CONTENT action");
        dispatch(changeButtonContentAction(id))
    },

    updateTitle: (newTitle) => {
        console.log("Dispatched UPDATE_TITLE action");
        dispatch(updateTitleAction(newTitle));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);