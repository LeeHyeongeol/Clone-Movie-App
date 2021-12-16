import React from 'react'
import propTypes from 'prop-types';
import './movie.css'
import { Link } from 'react-router-dom';

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres }, }}>
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title" >{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, idx) => {
                            return <li className="movie__genre" key={idx}>{genre}</li>
                        })}
                    </ul>
                    <h3 className="movie__summary">{summary.slice(0, 180)}...</h3>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired, //문자열 배열
};
export default Movie;