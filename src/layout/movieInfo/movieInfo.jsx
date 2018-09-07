import React, {Component} from 'react';
import Header from '../../components/header/header';
import authToken from '../../auth/auth';
import axios from 'axios';

class movieInfo extends Component {

    state = {
        movieInfo: null
    }

    componentDidMount() {
        const movieId = this.props.match.params.MovieId;
        const movieURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${authToken}`
        axios.get(movieURL).then(response => {
            this.setState({movieInfo: response.data})
            console.log(this.state.movieInfo);
        })
    }

    render() {
        let displayInfo = null;
        if (this.state.movieInfo !== null) {
        const baseImgURL = `http://image.tmdb.org/t/p/w780`;
        displayInfo = 
            <div className="movieInfo">
                <Header colour={'#111111'}>Movie Detail</Header>
                <Header colour={'#17A589'}>{this.state.movieInfo.title}</Header>
                <div classname="poster">
                    <img src={baseImgURL + this.state.movieInfo.poster_path} alt='Not Found'/>
                </div>
                <div className='movieStats'>
                    <h1>{this.state.movieInfo.release_date.substring(0,4)}</h1>
                    <h2>{this.state.movieInfo.runtime} min</h2>
                </div>
                <div className='sysnopsis'>
                    <p>{this.state.movieInfo.overview}</p>
                </div>
            </div>
        }
        return displayInfo;
    }
}

export default movieInfo;