import React from 'react';

const movieInfo = props => {
    return (
        <div className="movieInfo">
            <Header>Movie Detail</Header>
            <Header colour={'#17A589'}>props.title</Header>
            <div className='movieStats'></div>
        </div>
    )
}