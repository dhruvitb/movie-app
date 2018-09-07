import React, {Component} from 'react';
import './movie.css';

class Movie extends Component {

    movieClickedHandler = () => {
        console.log(this.props.data.title);
    }

    render() {
        return  <div className="movie"
                    onClick={this.movieClickedHandler}>
                    <img src={this.props.imgURL} alt="Not found"/>
                    {this.props.children}
                </div>
    }
}

export default Movie;