import React from 'react';
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';
import "./Movie.css";
function Movie({id, years, title, summary, poster, genres}) {
    return   (
            <Link to={{
                pathname: `/movie/${id}`,
                state: {
                    years,
                    title,
                    summary,
                    poster,
                    genres
                }
            }} 
            >
            <div className="movies_movie">
                <img src = {poster} className="poster" alt = {title} title = {title} />
                <div className = "movie_data">
            <h2 className = "title">{title}</h2>
            <ul className = "genres">
                {genres.map((genre, index) => (<li key = {index} className = "genres_genre">
                {genre}
                </li>))}
            </ul>
            <h3 className = "years">{years}</h3>
            <p className ="summary">{summary}</p>
                </div> 
                    </div>
                    </Link>
     ); }

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    years: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;