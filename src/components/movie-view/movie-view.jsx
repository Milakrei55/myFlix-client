import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = () => {
  const { movieId } = useParams();
  const movies = useSelector((state) => state.movies.list);
  const movie = movies.find((m) => m._id === movieId);

  if (!movie) return <div>Movie not found</div>;

  return (
    <Container className="mt-4">
      <Card>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img variant="top" src={movie.ImagePath} alt={movie.Title} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
                <strong>Description:</strong> {movie.Description}
              </Card.Text>
              <Card.Text>
                <strong>Director:</strong> {movie.Director.Name}
              </Card.Text>
              <Card.Text>
                <strong>Genre:</strong> {movie.Genre.Name}
              </Card.Text>
              <Link to="/">
                <Button variant="secondary">← Back</Button>
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
