import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);

  if (!movie) return <div>Movie not found</div>;

  return (
    <Container className="mt-4">
      <Card>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img variant="top" src={movie.image} alt={movie.title} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                <strong>Description:</strong> {movie.description}
              </Card.Text>
              <Card.Text>
                <strong>Director:</strong> {movie.director}
              </Card.Text>
              <Card.Text>
                <strong>Genre:</strong> {movie.genre}
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
