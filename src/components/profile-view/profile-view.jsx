import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import "./profile-view.scss";

export const ProfileView = ({ movies, user, token, onLoggedOut }) => {
  const [userData, setUserData] = useState(null);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [FavoriteMovies, setFavoriteMovies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && token) {
      fetch(`https://milasmovieflix-ab66d5118b4d.herokuapp.com/users/${user.Username}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setUsername(data.Username);
          setEmail(data.Email);
          setBirthday(data.Birthday?.split("T")[0]);
          setFavoriteMovies(data.FavoriteMovies || []);
        })
        .catch((error) => console.error("Error fetching user data", error));
    }
  }, [user, token]);

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(`https://milasmovieflix-ab66d5118b4d.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ Username, Password, Email, Birthday })
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        dispatch(setUser(updatedUser));
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Profile updated successfully!");
      })
      .catch((error) => console.error("Error updating profile", error));
  };

  const handleDelete = () => {
    fetch(`https://milasmovieflix-ab66d5118b4d.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          onLoggedOut();
          navigate("/");
        } else {
          alert("Failed to delete profile");
        }
      })
      .catch((error) => console.error("Error deleting profile:", error));
  };

  const handleAddFavorite = (movieId) => {
    fetch(`https://milasmovieflix-ab66d5118b4d.herokuapp.com/users/${user.Username}/movies/${movieId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => setFavoriteMovies(data.FavoriteMovies))
      .catch((error) => console.error("Error adding to favorites", error));
  };

  const handleRemoveFavorite = (movieId) => {
    fetch(`https://milasmovieflix-ab66d5118b4d.herokuapp.com/users/${user.Username}/movies/${movieId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => setFavoriteMovies(data.FavoriteMovies))
      .catch((error) => console.error("Error removing from favorites", error));
  };

  const FavoriteMoviesList = movies?.filter((movie) => FavoriteMovies.includes(movie._id)) || [];

  if (!userData) return <div>Loading profile...</div>;

  return (
    <Container className="profile-view mt-4">
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>👤 Your Profile</Card.Title>
              <Card.Text><strong>Username:</strong> {userData.Username}</Card.Text>
              <Card.Text><strong>Email:</strong> {userData.Email}</Card.Text>
              <Card.Text><strong>Birthday:</strong> {Birthday}</Card.Text>
              <Button variant="danger" onClick={handleDelete} className="mt-3 w-100">Delete Profile</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>📝 Update Profile Info</Card.Title>
              <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={Username} onChange={(e) => setUsername(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control type="date" value={Birthday} onChange={(e) => setBirthday(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">Save Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>❤️ Your Favorite Movies</h4>
          {FavoriteMoviesList.length === 0 ? (
            <p>You have not added any favorites yet.</p>
          ) : (
            <Row>
              {FavoriteMoviesList.map((movie) => (
                <Col key={movie._id} md={5} className="mb-4">
                  <MovieCard
                    movie={movie}
                    onAddFavorite={() => handleAddFavorite(movie._id)}
                    onRemoveFavorite={() => handleRemoveFavorite(movie._id)}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};