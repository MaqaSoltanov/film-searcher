import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateMoviesAction from '../../redux/actions/updateMoviesAction';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={(e) => this.props.getMovies(e, searchLine, this.props.favMovies)}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favMovies: state.favoriteReducer.favoriteMovies
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMovies: async (e, searchLine, favMovies) => {
        console.log("Dispatched UPDATE_MOVIES action")
        e.preventDefault();

        var apiResponse;
        // Fetch to get movies by the name of searchLine
        await fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=3b9fab44`)
            .then(res => { return res.json() })
            .then((data) => { apiResponse = structuredClone(data) })
            .catch(error => { throw (error) });

        // Checking response on errors
        if (apiResponse.Response === "False") {
            alert(apiResponse.Error);
            return;
        }

        // Adding new property which says whether if movie is added to favorites or not
        const moviesArr = apiResponse.Search.map((movie) => {
            return {
                ...movie,
                isAdded: false
            }
        });

        // Checking if favMovies contains any movie and if it does we change the isAdded property
        if (favMovies.length > 0) {
            for (let i = 0; i < favMovies.length; i++) {
                for (let j = 0; j < moviesArr.length; j++) {
                    if (moviesArr[j].imdbID === favMovies[i].imdbID)
                        moviesArr[j].isAdded = true;
                }
            }
        }

        dispatch(updateMoviesAction(moviesArr));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);