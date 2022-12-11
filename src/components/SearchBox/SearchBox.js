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
                        onClick={(e) => this.props.getMovies(e, searchLine)}

                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMovies: async (e, searchLine) => {
        console.log("Dispatched UPDATE_MOVIES action")
        e.preventDefault();
        var moviesList;

        await fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=3b9fab44`)
        .then(res => { return res.json() })
        .then((data) => {moviesList = structuredClone(data)})
        .catch(error => {throw(error)});
                
        if(moviesList.Response === "False"){
            alert(moviesList.Error);
            return;
        }
        
        dispatch(updateMoviesAction(moviesList.Search));
    }
})

export default connect(null, mapDispatchToProps)(SearchBox);