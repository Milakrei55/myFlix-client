import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onAddFavorite, onRemoveFavorite }) => {
  return (
    <Col className="mb-4" md={10}>
      <Card className="h-100">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <div className="d-flex justify-content-between mt-3">
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
              <Button variant="outline-primary">Open</Button>
            </Link>
            <Button variant="primary" onClick={onAddFavorite}>
              Favorite
            </Button>
            <Button variant="danger" onClick={onRemoveFavorite}>
              Remove
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.string,
    Description: PropTypes.string,
    Genre: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  onAddFavorite: PropTypes.func,
  onRemoveFavorite: PropTypes.func,
};
