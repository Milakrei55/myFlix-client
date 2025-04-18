import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onAddFavorite, onRemoveFavorite }) => {
  return (
    <Col className="mb-4" md={4}>
      <Card className="h-100">
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <strong>Director:</strong> {movie.director}
          </Card.Text>
          <Card.Text>
            <strong>Genre:</strong> {movie.genre}
          </Card.Text>
          <Card.Text>{movie.description}</Card.Text>
          <div className="d-flex justify-content-between mt-3">
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
              <Button variant="outline-primary">Open</Button>
            </Link>
            <Button variant="primary" onClick={onAddFavorite}>
              ♡ Favorite
            </Button>
            <Button variant="danger" onClick={onRemoveFavorite}>
              ✖ Remove
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string,
    description: PropTypes.string,
    genre: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  onAddFavorite: PropTypes.func,
  onRemoveFavorite: PropTypes.func,
};
