import React, { Component } from 'react';
import { connect } from 'react-redux';
import makeGetRequestAction from '../../redux/actions/makeGetRequestAction';
import './ListPage.css';

class ListPage extends Component {
    dispatchFromRender = (id) => {
        this.props.makeGetRequest(id);
    }
    render() {
        const { Title, Year, imdbID } = this.props;
        this.dispatchFromRender(this.props.getID)
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.props.listTitle}</h1>
                <ul>
                    {this.props.moviesFromApi.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    makeGetRequest: async(id) => {
        console.log("Dispatched DELETE_FROM_FAVORITES action");
        var idArray;
        await fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        .then(res => res.json())
        .then(data => idArray = data.movies)
        dispatch(makeGetRequestAction(idArray));
    },
})

const mapStateToProps = (state) => {
    console.log("mapStateToProps updated ListPage");

    return {
        moviesFromApi: state.favoriteReducer.favoriteMovies,
        getID: state.favoriteReducer.getID,
        listTitle: state.favoriteReducer.title
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);