import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onAddFavorite, onRemoveFavorite }) => {

return (
    <Card>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.genre}</Card.Text>
        <Link to ={`/movies/${encodeURIComponent(movie._id)}`}>
        <Button variant="link">Open</Button>
        </Link> 

        {/* favorite button */}
        <Button 
          variant="primary"
          onClick={onAddFavorite}>
            Add to Favorites 
          </Button>

          {/* Remove Favorite Button */}
          <Button 
          variant="danger"
          onClick={onRemoveFavorite}>
            Remove from Favorites
          </Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string,
    description: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};