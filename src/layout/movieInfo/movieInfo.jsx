import React, {Component} from 'react';
import Header from '../../components/header/header';
import authToken from '../../auth/auth';
import axios from 'axios';
import './movieInfo.css'

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
            <div>
                <Header colour={'#111111'}>Movie Detail</Header>
                <Header colour={'#17A589'}>{this.state.movieInfo.title}</Header>
                <div className='content'>
                    <div className="poster">
                            <img src={baseImgURL + this.state.movieInfo.poster_path} alt='Not Found'/>
                    </div>
                    <div className='movieInfo'>
                        <div className='movieStats'>
                            <h1>Release: {this.state.movieInfo.release_date.substring(0,4)}</h1>
                            <h4>{this.state.movieInfo.runtime} min</h4>
                            <h3>{this.state.movieInfo.vote_average}/10</h3>
                        </div>
                        <div className='synopsis'>
                            <p>{this.state.movieInfo.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        return displayInfo;
    }
}

export default movieInfo;