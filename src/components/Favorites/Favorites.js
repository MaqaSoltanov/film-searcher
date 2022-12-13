import React, { Component } from 'react';
import { connect } from 'react-redux';
import deleteFromFavoritesAction from '../../redux/actions/deleteFromFavoritesAction';
import changeButtonContentAction from '../../redux/actions/changeButtonContent.Action';
import updateTitleAction from '../../redux/actions/updateTitleAction';
import './Favorites.css';
import { Link } from 'react-router-dom';
import makePostRequestAction from '../../redux/actions/makePostRequestAction';

class Favorites extends Component {
    state = {
        isActive: false,
        isPressed: false
    }

    handleChange = (e, favMovies) => {
        if (e.target.value.length !== 0 && favMovies.length !== 0)
            this.setState({ isActive: true });

        this.props.updateTitle(e.target.value);
    }

    handleSaveClick = (e, favMovies, listTitle) => {
        e.preventDefault();
        this.setState({ isPressed: true });
        this.props.makePostRequest(favMovies, listTitle);
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
                        <Link to="/list/:id">{this.props.listTitle}</Link>
                        :
                        <button type="submit"
                            className="favorites__save"

                            disabled={!(this.state.isActive)} onClick={(e) => this.handleSaveClick(e, this.props.favMovies, this.props.listTitle)}>
                            Сохранить список
                        </button>}
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

    makePostRequest: async (favMovies, listTitle) => {
        console.log("Dispatched MAKE_POST_REQUEST action");
        var idArray = favMovies.map((favMovie) => {
            return favMovie.imdbID;
        })


        var bodyArgument = { title: listTitle, movies: idArray };
        console.log(bodyArgument);
        var id;

        await fetch("https://acb-api.algoritmika.org/api/movies/list", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify(bodyArgument)

        }).then(res => res.json()).then((data) => {
            id = data.id;
            console.log(data);
        });
        console.log(id);
        dispatch(makePostRequestAction(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);