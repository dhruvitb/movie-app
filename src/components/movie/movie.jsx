import React from 'react';
import './movie.css';
import {Link} from 'react-router-dom'

const movie = (props) => {
    return  <Link to={`/movie/${props.data.id}`} className="movie">
                <img src={props.imgURL} alt="Not found"/>
                {props.children}
            </Link>
}

export default movie;