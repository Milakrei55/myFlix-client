import React from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "../movie-card/movie-card";
import { MoviesFilter } from "../movies-filter/movies-filter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const MoviesList = () => {
  const movies = useSelector((state) => state.movies.list);
  const filter = useSelector((state) => state.movies.filter).trim().toLowerCase();
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("token");

  const handleAddFavorite = (movieId) => {
    fetch(
      `https://milasmovieflix-ab66d5118b4d.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((updatedUser) => {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      })
      .catch((error) => console.error("Error adding favorite:", error));
  };

  const handleRemoveFavorite = (movieId) => {
    fetch(
      `https://milasmovieflix-ab66d5118b4d.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => res.json())
      .then((updatedUser) => {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      })
      .catch((error) => console.error("Error removing favorite:", error));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(filter)
  );

  return (
    <>
      <Row className="mb-3">
        <MoviesFilter />
      </Row>
      <Row>
        {movies.length === 0 ? (
          <Col>The list is empty!</Col>
        ) : (
          filteredMovies.map((movie) => (
            <Col className="mb-4" key={movie._id} md={3}>
              <MovieCard
                movie={movie}
                onAddFavorite={() => handleAddFavorite(movie._id)}
                onRemoveFavorite={() => handleRemoveFavorite(movie._id)}
              />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};
