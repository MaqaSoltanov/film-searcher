import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Favorites.css';


class Favorites extends Component {

    render() {
        return (
            <div className="favorites">
                <input className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favMovies.map((item) => {
                        return <li key={item.imdbID}>{item.title} ({item.year})</li>;
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

export default connect(mapStateToProps)(Favorites);