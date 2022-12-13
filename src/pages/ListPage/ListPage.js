import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListPage.css';

class ListPage extends Component {
    render() {
        const { Title, Year, imdbID } = this.props;        
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

const mapStateToProps = (state) => {
    console.log("mapStateToProps updated ListPage");
    return {
        moviesFromApi: state.favoriteReducer.favoriteMovies,
        getID: state.favoriteReducer.getID,
        listTitle: state.favoriteReducer.title
    }
}

export default connect(mapStateToProps)(ListPage);