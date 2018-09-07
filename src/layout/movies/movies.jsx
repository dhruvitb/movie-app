import React, {Component} from 'react';
import Movie from '../../components/movie/movie'
import axios from 'axios'
import authToken from '../../auth/auth'
import './movies.css'

class Movies extends Component {

    state = {
        moviesData: null
    }

    componentDidMount() {
        const topMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${authToken}&language=en-US&sort_by=popularity.desc&page=1`
        axios.get(topMoviesURL).then(response => {
            this.setState({moviesData: response.data.results})
            console.log(this.state.moviesData);
        })
    }

    render() {
        const baseImgURL = `http://image.tmdb.org/t/p/w780`;
        let movies = null;
        if (this.state.moviesData !== null) {
            movies = (this.state.moviesData.map(movie => (
                <Movie imgURL={baseImgURL + movie.poster_path} key={movie.title} data={movie}/>
            )))
        }
        return <div className="movies">{movies}</div>;
    }
}

export default Movies;